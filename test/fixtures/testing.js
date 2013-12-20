'use strict';


module.exports = function() {
  return {
    noFieldset: true,
    fields: {
      end: {
        kind: 'radio',
        label: 'Example',
        options: {
          foo: 'bar',
          baz: 'qux',
        }
      },
    },
  };
};
