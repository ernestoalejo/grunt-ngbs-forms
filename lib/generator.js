'use strict';


module.exports = function(grunt) {
  var inspect = require('util').inspect;
  var helpers = require('./helpers')(grunt),
    builders = require('./builders')(grunt),
    validations = require('./validations')(grunt);


  var Generator = function(filepath, definition, id) {
    this.filepath = filepath;
    this.definition = definition;
    this.id = id;

    this.blocks = [];
    this.indent = 0;
  };


  Generator.prototype.build = function() {
    // Open the form and prepare the submit process
    this.outputBlock(helpers.template('pre-form', {
      filepath: this.filepath,
      name: this.getName(),
      trySubmit: this.getTrySubmit(),
      submit: this.getSubmit(),
    }));
    this.indent++;

    // Generate fields
    var fields = this.definition.fields;
    for (var id in fields) {
      this.buildField(id, fields[id]);
    }

    // Close the form
    this.indent--;
    this.outputBlock(helpers.template('post-form'));

    return this.blocks.join('\n');
  };


  // Generates an individual field
  Generator.prototype.buildField = function(id, field) {
    // Check if the builder for this kind of field exists
    var builder = builders[field.kind];
    if (!builder) {
      this.fail(id, 'kind not recognized: ' + field.kind);
    }

    // Run the builder
    try {
      var result = builder(field);
    } catch(e) {
      this.fail(id, e);
    }

    if (!result.dontWrap) {
      this.outputBlock(helpers.template('pre-field', {
        hasValidations: field.validations && field.validations.length > 0,
        name: this.getName(),
        id: id,
        label: field.label,
      }));
      this.indent++;
    }

    // Build the validations for this field
    var valresult = this.buildValidations(id, field);

    // Add validator args
    if (valresult.args) {
      result.data.args = grunt.util._.extend(result.data.args, valresult.args);
    }

    if (result.template) {
      result.data.obj = this.getObj();
      result.data.name = this.getName();
      result.data.id = id;

      // Format HTML args correctly
      var args = '';
      for (var key in result.data.args) {
        args += ' ' + key + '=' + '"' + result.data.args[key] + '"';
      }
      result.data.args = grunt.util._.extend(args, valresult.args);

      this.outputBlock(helpers.template(result.template, result.data));
    }

    // If there's validation output, add it now
    if (valresult.output) {
      this.outputBlock(valresult.output);
    }

    // Close the field
    if (!result.dontWrap) {
      this.indent--;
      this.outputBlock(helpers.template('post-field'));
    }
  };


  // Build the validations for a field
  Generator.prototype.buildValidations = function(id, field) {
    // Default data
    var data = {
      args: {},
      output: '',
    };
    if (!field.validations) {
      return data;
    }

    data.output += helpers.template('pre-validation-errors', {
      id: id,
      name: this.getName(),
    });

    for (var i = 0; i < field.validations.length; i++) {
      var val = field.validations[i][0];
      var msg = field.validations[i][1];
      var args = [];

      // Extract arguments if present
      if (val.indexOf(':') != -1) {
        var idx = val.indexOf(':');
        args = val.substring(idx + 1, val.length).split(',');
        val = val.substring(0, idx);
      }

      // Check if the validation eixsts
      if (!validations[val]) {
        this.fail(id, 'validation not recognized: ' + val);
      }

      // Run the validation
      try {
        var result = validations[val](args);
      } catch (e) {
        this.fail(id, e);
      }

      // Check required field kinds
      if (result.requiresKind && result.requiresKind.indexOf(field.kind) == -1) {
        this.fail(id, 'field kind not supported with this validation: ' + val);
      }

      // Save args if they're present
      if (result.args) {
        data.args = grunt.util._.extend(data.args, result.args);
      }

      // Prepare the error alert template
      data.output += helpers.template('validation-error', {
        id: id,
        name: this.getName(),
        error: result.error,
        msg: msg,
      });
    }

    data.output += helpers.template('post-validation-errors');

    return data;
  };


  // Build the name of the form, defaults to 'fXX' where XX it's the ID of the form
  Generator.prototype.getName = function() {
    return this.definition.name || 'f' + this.id;
  };


  // Build the name of the object containing the results of the form,
  // defaults to data
  Generator.prototype.getObj = function() {
    return this.definition.name || 'data';
  };


  // Build the try submit JS func, defaults to an empty string
  Generator.prototype.getTrySubmit = function() {
    return this.definition.trySubmit ? this.definition.trySubmit + '(); ' : '';
  };


  // Build the submit JS func, defaults to "submit".
  Generator.prototype.getSubmit = function() {
    var f = this.definition.submit;
    if (!f) {
      f = 'submit';
    }
    return this.getName() + '.$valid && ' + f + '();';
  };


  // Prepare a new output block, indenting it line by line if needed
  Generator.prototype.outputBlock = function(block) {
    var prefix = grunt.util.repeat(this.indent, '  ');

    var lines = block.split('\n');
    for (var i = 0; i < lines.length; i++) {
      if (lines[i].length > 0) {
        lines[i] = prefix + lines[i];
      }
    }

    this.blocks.push(lines.join('\n'));
  };


  // Generate a better fail message when an error it's found in the
  // input data format
  Generator.prototype.fail = function(id, msg) {
    grunt.fatal('\n\t' + msg + '\n\tin key: ' + id + '\n\tin file: ' + this.filepath);
  };


  return Generator;
};

