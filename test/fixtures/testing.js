'use strict';


module.exports = function() {
  return {
    fields: {
      myinput: {
        kind: 'input',
        validations: [
          ['minlength', 3, 'Required minlength'],
        ],
      },
    },
  };
};
