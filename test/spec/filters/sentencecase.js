'use strict';

describe('Filter: sentencecase', function () {

  // load the filter's module
  beforeEach(module('phraseApp'));

  // initialize a new instance of the filter before each test
  var sentencecase;
  beforeEach(inject(function ($filter) {
    sentencecase = $filter('sentencecase');
  }));

  it('should return the input prefixed with "sentencecase filter:"', function () {
    var text = 'angularjs';
    expect(sentencecase(text)).toBe('sentencecase filter: ' + text);
  });

});
