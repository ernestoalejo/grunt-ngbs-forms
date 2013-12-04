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

  integer: function() {
    return {
      requiresKind: ['input'],
      attrs: {},
      error: 'number',
    };
  },

  minvalue: function(args) {
    if (args.length != 1 || !(/^\+?\-?(0|[1-9]\d*)$/.test(args[0]))) {
      throw new Error('minvalue validation needs an integer as the first arg only');
    }
    
    return {
      requiresKind: ['input'],
      attrs: {min: args[0]},
      error: 'min',
    };
  },

  mindate: function(args) {
    if (args.length != 1) {
      throw new Error('mindate validation needs an expr as the first arg only');
    }
    
    return {
      requiresKind: ['input'],
      attrs: {
        min: args[0],
        'min-date-value': args[0],
      },
      error: 'min',
    };
  },

  maxdate: function(args) {
    if (args.length != 1) {
      throw new Error('maxdate validation needs an expr as the first arg only');
    }
    
    return {
      requiresKind: ['input'],
      attrs: {
        max: args[0],
        'max-date-value': args[0],
      },
      error: 'max',
    };
  },

  date: function() {
    return {
      requiresKind: ['input'],
      attrs: {},
      error: 'date',
    };
  },

};

