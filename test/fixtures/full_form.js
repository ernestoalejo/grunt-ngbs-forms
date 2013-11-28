'use strict';


module.exports = function() {
  return {
    fields: {
      myinput: {
        kind: 'input',
      },

      myinputv: {
        kind: 'input',
        label: 'Email',
        type: 'email',
        placeholder: 'test@example',
        attrs: {
          'myarg1': 'myvalue1',
          'myarg2': 'myvalue2',
        },
        validations: [
          ['required', 'El email es obligatorio'],
          ['minlength:3', 'El email debe tener al menos 3 caracteres'],
        ],
      },

      myinputaffix: {
        kind: 'input',
        prefix: 'myprefix',
        suffix: 'mysuffix',
        validations: [
          ['minlength', 3, 'El email debe tener al menos 3 caracteres'],
          ['pattern', /^[a-z]$/, 'My pattern'],
        ],
      },

      myselect: {
        kind: 'select',
      },

      myselectoptions: {
        kind: 'select',
        options: {
          'myvalue1': 'mylabel1',
          'myvalue2': 'mylabel2',
        },
        validations: [
          ['custom:myexpr', 'My message'],
        ],
      },

      myselectng: {
        kind: 'select',
        label: 'Select label',
        attrs: {
          'ng-options': 'items in list',
        },
      },

      myselectrepeat: {
        kind: 'select',
        ngRepeatOptions: {
          repeat: 'item in list',
          value: '{{ item.label }}',
          label: '{{ item.label }}',
        },
        options: {
          'foo': 'bar',
        }
      },

      mytextarea: {
        kind: 'textarea',
        rows: 7,
      },

      mysubmit: {
        kind: 'submit',
        label: 'Send button',
      }
    },
  };
};
