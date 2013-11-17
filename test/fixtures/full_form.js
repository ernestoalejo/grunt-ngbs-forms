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
    },
  };
};
