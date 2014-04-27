'use strict';

describe('Filter: movefirst', function () {

  // load the filter's module
  beforeEach(module('phraseApp'));

  // initialize a new instance of the filter before each test
  var movefirst;
  beforeEach(inject(function ($filter) {
    movefirst = $filter('movefirst');
  }));

  it('should return the input prefixed with "movefirst filter:"', function () {
    var text = 'angularjs';
    expect(movefirst(text)).toBe('movefirst filter: ' + text);
  });

});
