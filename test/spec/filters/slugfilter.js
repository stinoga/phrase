'use strict';

describe('Filter: slugFilter', function () {

  // load the filter's module
  beforeEach(module('phraseApp'));

  // initialize a new instance of the filter before each test
  var slugFilter;
  beforeEach(inject(function ($filter) {
    slugFilter = $filter('slugFilter');
  }));

  it('should return the input prefixed with "slugFilter filter:"', function () {
    var text = 'angularjs';
    expect(slugFilter(text)).toBe('slugFilter filter: ' + text);
  });

});
