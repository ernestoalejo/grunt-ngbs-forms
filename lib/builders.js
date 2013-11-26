'use strict';


module.exports = {

  input: function(data) {
    return {
      template: 'input',
      data: {
        type: data.type || 'text',
        placeholder: data.placeholder || '',
        attrs: data.attrs,
      },
    };
  },

  select: function(data) {
    return {
      template: 'select',
      data: {
        attrs: data.attrs,
        options: data.options || {},
        ngRepeatOptions: data.ngRepeatOptions,
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

