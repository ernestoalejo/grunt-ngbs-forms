'use strict';


module.exports = {

  required: function() {
    return {
      requiresKind: ['input'],
      attrs: {required: ''},
      error: 'required',
    };
  },

  minlength: function(args) {
    if (args.length != 1 || !parseInt(args[0], 10)) {
      throw new Error('minlength validation needs an integer as the first arg only');
    }
    
    return {
      requiresKind: ['input'],
      attrs: {'ng-minlength': args[0]},
      error: 'minlength',
    };
  },

};

