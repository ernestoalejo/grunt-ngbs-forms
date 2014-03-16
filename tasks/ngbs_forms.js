/*
 * grunt-ngbs-forms
 * https://github.com/ernestoalejo/grunt-ngbs-forms
 *
 * Copyright (c) 2013 Ernesto Alejo
 * Licensed under the MIT license.
 */
'use strict';

module.exports = function(grunt) {
  var forms = require('ngbs-forms'),
      path = require('path'),
      _ = require('underscore'),
      fs = require('fs');

  grunt.registerMultiTask('ngbs_forms', 'Generate forms using Angular for validations and Bootstrap for styles from short and concise descriptions of the fields.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      formsCwd: '.',
    });

    this.files.forEach(function(file) {
      var src = file.src[0];
      if (!grunt.file.exists(src)) {
        grunt.log.warn('Source file "' + src + '" not found.');
        return;
      }

      var contents = fs.readFileSync(path.resolve(src));
      grunt.file.write(file.dest, _.template(contents.toString(), {
        buildForm: function(filename) {
          var frmPath = path.join(options.formsCwd, filename);
          return forms.generate(path.resolve(frmPath));
        },
      }));

      grunt.verbose.writeln('File "' + file.dest + '" created.');
    });
  });

};
