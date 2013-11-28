'use strict';


module.exports = {

  required: function() {
    return {
      requiresKind: ['input', 'textarea'],
      attrs: {required: ''},
      error: 'required',
    };
  },

  minlength: function(args) {
    if (args.length != 1 || !parseInt(args[0], 10)) {
      throw new Error('minlength validation needs an integer as the first arg only');
    }
    
    return {
      requiresKind: ['input', 'textarea'],
      attrs: {'ng-minlength': args[0]},
      error: 'minlength',
    };
  },

  pattern: function(args) {
    if (args.length != 1) {
      throw new Error('pattern validation needs a regexp as the first arg only');
    }
    
    return {
      requiresKind: ['input', 'textarea'],
      attrs: {'ng-pattern': '' + args[0]},
      error: 'pattern',
    };
  },

  custom: function(args) {
    if (args.length != 1) {
      throw new Error('custom validation needs an expression as the first arg only');
    }
    
    return {
      requiresKind: ['input', 'select', 'textarea'],
      attrs: {},
      customError: args[0],
    };
  },

};

