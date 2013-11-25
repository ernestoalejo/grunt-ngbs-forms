'use strict';


module.exports = {

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

  select: function(data) {
    return {
      template: 'select',
      data: {
        args: data.args,
        options: data.options || {},
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

