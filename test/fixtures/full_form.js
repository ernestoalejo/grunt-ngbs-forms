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
        args: {
          'myarg1': 'myvalue1',
          'myarg2': 'myvalue2',
        },
        validations: [
          ['required', 'El email es obligatorio'],
          ['minlength:3', 'El email debe tener al menos 3 caracteres'],
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
      },

      myselectng: {
        kind: 'select',
        args: {
          'ng-options': 'items in list',
        },
      },

      mysubmit: {
        kind: 'submit',
        label: 'Send button',
      }
    },
  };
};
