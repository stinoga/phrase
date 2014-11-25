'use strict';

describe('Filter: seconds', function () {

  // load the filter's module
  beforeEach(module('phraseApp'));

  // initialize a new instance of the filter before each test
  var seconds;
  beforeEach(inject(function ($filter) {
    seconds = $filter('seconds');
  }));

  it('should return the input prefixed with "seconds filter:"', function () {
    var text = 'angularjs';
    expect(seconds(text)).toBe('seconds filter: ' + text);
  });

});
