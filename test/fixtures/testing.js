'use strict';


module.exports = function() {
  return {
    fields: {
      myfield: {
        kind: 'input',
        validations: [
          ['required', 'foo msg'],
        ],
      },

      myfield2: {
        kind: 'input',
        validations: [
          ['required', 'bar msg'],
          ['custom:baz', 'qux msg'],
        ],
      },

      myfield3: {
        kind: 'input',
        validations: [
          ['required', 'bar msg'],
          ['custom:baz', 'qux msg'],
          ['custom:baz2', 'qux msg'],
        ],
      },
    },
  };
};
