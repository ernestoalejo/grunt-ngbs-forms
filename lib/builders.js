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

    checkbox: function(data, generated) {
      var definitionAttrs = {
        type: 'checkbox',
        name: data.name || (generated.formName + generated.id),
        id: data.id || (generated.formName + generated.id),
        'ng-model': generated.obj + '.' + generated.id,
      };
      
      return {
        template: 'checkbox',
        dontWrap: true,
        data: {
          label: data.label,
          attrs: _.extend(definitionAttrs, data.attrs || {}),
          containerAttrs: data.containerAttrs,
        },
      };
    },

    radio: function(data, generated) {
      var definitionAttrs = {
        type: 'radio',
        name: data.name || (generated.formName + generated.id),
        'ng-model': generated.obj + '.' + generated.id,
      };

      var options = data.options || {};
      var res = [], i = 0;
      for (var key in options) {
        res.push({
          key: key,
          label: options[key],
          item: i,
        });
        i++;
      }

      return {
        template: 'radio',
        data: {
          idprefix: data.name || (generated.formName + generated.id),
          attrs: _.extend(definitionAttrs, data.attrs || {}),
          options: res,
          ngRepeatOptions: data.ngRepeatOptions,
        },
      };
    },
  };

};

