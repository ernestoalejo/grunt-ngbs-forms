'use strict';


module.exports = function() {
  return {
    fields: {
      myinput: {
        kind: 'input',
        validations: [
          ['pattern', /[a-d]/, 'Required pattern'],
          ['custom', 'foobar', 'Required custom'],
          ['custom', 'foobaz', 'Required custom'],
        ],
      },

      myinput2: {
        kind: 'input',
        validations: [
          ['pattern', /[a-d]/, 'Required pattern'],
        ],
      },
    },
  };
};
