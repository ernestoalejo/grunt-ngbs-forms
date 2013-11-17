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

    submit: function(data) {
      return {
        template: 'submit',
        dontWrap: true,
        data: {
          label: data.label,
        }
      };
    },

  };
};

