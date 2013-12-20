'use strict';


module.exports = function() {
  var _ = require('lodash');

  return {
    input: function(data, generated) {
      var definitionAttrs = {
        type: data.type || 'text',
        placeholder: data.placeholder || '',
        class: 'form-control',
        name: data.name || (generated.formName + generated.id),
        id: data.id || (generated.formName + generated.id),
        'ng-model': generated.obj + '.' + generated.id,
      };

      return {
        template: 'input',
        data: {
          attrs: _.extend(definitionAttrs, data.attrs || {}),
          prefix: data.prefix,
          suffix: data.suffix,
          containerAttrs: data.containerAttrs,
        },
      };
    },

    textarea: function(data, generated) {
      var definitionAttrs = {
        placeholder: data.placeholder || '',
        class: 'form-control',
        name: data.name || (generated.formName + generated.id),
        id: data.id || (generated.formName + generated.id),
        'ng-model': generated.obj + '.' + generated.id,
      };
      if (data.rows) {
        definitionAttrs.rows = data.rows;
      }

      return {
        template: 'textarea',
        data: {
          attrs: _.extend(definitionAttrs, data.attrs || {}),
        },
      };
    },

    select: function(data, generated) {
      var definitionAttrs = {
        class: 'form-control',
        name: data.name || (generated.formName + generated.id),
        id: data.id || (generated.formName + generated.id),
        'ng-model': generated.obj + '.' + generated.id,
      };

      return {
        template: 'select',
        data: {
          attrs: _.extend(definitionAttrs, data.attrs || {}),
          options: data.options || {},
          ngRepeatOptions: data.ngRepeatOptions,
        },
      };
    },

    submit: function(data, generated) {
      return {
        template: 'submit',
        dontWrap: true,
        data: {
          formName: generated.formName,
          label: data.label,
          attrs: data.attrs,
          containerAttrs: data.containerAttrs,
          additionalContent: data.additionalContent || '',
        }
      };
    },

    static: function(data, generated) {
      return {
        template: 'static',
        data: {
          content: data.content,
          attrs: {
            id: data.id || (generated.formName + generated.id),
          }
        },
      };
    },

    staticNoWrapper: function(data) {
      return {
        template: 'static',
        dontWrap: true,
        data: {
          content: data.content,
        },
      };
    },
  };

};

