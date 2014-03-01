'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.ngbs_forms = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  min_example: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/min_example.html');
    var expected = grunt.file.read('test/expected/min_example.html');
    test.equal(actual, expected, 'should describe what the minimum behavior is.');

    test.done();
  },
  cwd_example: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/cwd_example.html');
    var expected = grunt.file.read('test/expected/cwd_example.html');
    test.equal(actual, expected, 'should describe what the minimum behavior is.');

    test.done();
  },
};
