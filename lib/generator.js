'use strict';


module.exports = function(grunt) {
  var inspect = require('util').inspect;
  var helpers = require('./helpers')(grunt);


  var Generator = function(filepath, definition, id) {
    this.filepath = filepath;
    this.definition = definition;
    this.id = id;

    this.blocks = [];
    this.indent = 0;
  };


  Generator.prototype.build = function() {
    this.outputBlock(helpers.template('pre-form', {
      filepath: this.filepath,
      name: this.getName(),
      trySubmit: this.getTrySubmit(),
      submit: this.getSubmit(),
    }));
    this.indent++;


    this.indent--;
    this.outputBlock(helpers.template('post-form'));

    return this.blocks.join('\n');
  };


  // Build the name of the form, defaults to 'fXX' where XX it's the ID of the form
  Generator.prototype.getName = function() {
    return this.definition.name || 'f' + this.id;
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


  return Generator;
};

