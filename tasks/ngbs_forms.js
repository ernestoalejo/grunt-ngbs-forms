/*
 * grunt-ngbs-forms
 * https://github.com/ernestoalejo/grunt-ngbs-forms
 *
 * Copyright (c) 2013 Ernesto Alejo
 * Licensed under the MIT license.
 */
'use strict';


module.exports = function(grunt) {

  var buildFormFunc = require('../lib/build-form.js'),
      path = require('path');

  grunt.registerMultiTask('ngbs_forms', 'Generate forms using Angular for validations and Bootstrap for styles from simple JS descriptions', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      templateStartDelimiter: '<%',
      templateEndDelimiter: '%>',
      formsCwd: '.',
    });

    this.files.forEach(function(file) {
      var src = file.src[0];
      if (!grunt.file.exists(src)) {
        grunt.log.warn('Source file "' + src + '" not found.');
        return;
      }

      var content = grunt.file.read(path.resolve(src));
      grunt.file.write(file.dest, grunt.template.process(content, {
        data: {
          buildForm: buildFormFunc(grunt, options.formsCwd),
        }
      }));

      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
