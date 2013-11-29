'use strict';


module.exports = function() {
  return {
    fields: {
      submit: {
        kind: 'submit',
        label: 'Testing',
        containerAttrs: {
          bar: 'baz',
        },
        attrs: {
          test: 'foo',
        },
      },
      submit2: {
        kind: 'submit',
        label: 'Testing',
      },
    },
  };
};
