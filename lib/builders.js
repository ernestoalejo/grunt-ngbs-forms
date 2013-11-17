'use strict';


module.exports = function(grunt) {
  return {

    input: function(data) {
      return {
        template: 'input',
        data: {
          type: data.type || 'text',
          placeholder: data.placeholder || '',
          args: data.args,
        },
      };
    },

  };
};

