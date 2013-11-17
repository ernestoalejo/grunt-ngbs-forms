'use strict';


module.exports = function(grunt, basePath) {
  var path = require('path'),
      Generator = require('./generator.js')(grunt);

  var id = 0;

  return function(filepath) {
    filepath = path.join(basePath, filepath);
    var definition = require(path.resolve(filepath))();
    var generator = new Generator(filepath, definition, id++);
    return generator.build();
  };
};
