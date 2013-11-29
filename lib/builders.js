'use strict';


module.exports = {

  input: function(data) {
    return {
      template: 'input',
      data: {
        type: data.type || 'text',
        placeholder: data.placeholder || '',
        attrs: data.attrs,
        prefix: data.prefix,
        suffix: data.suffix,
      },
    };
  },

  textarea: function(data) {
    return {
      template: 'textarea',
      data: {
        placeholder: data.placeholder || '',
        attrs: data.attrs,
        rows: data.rows,
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
        attrs: data.attrs,
      }
    };
  },

};

