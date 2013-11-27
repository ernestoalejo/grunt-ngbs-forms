'use strict';


module.exports = function() {
  return {
    fields: {
      myinput: {
        kind: 'input',
      },

      myinput2: {
        kind: 'input',
        prefix: 'myprefix',
      },

      myinput3: {
        kind: 'input',
        suffix: 'mysuffix',
      },

      myinput4: {
        kind: 'input',
        prefix: 'myprefix',
        suffix: 'mysuffix',
      },
    },
  };
};
