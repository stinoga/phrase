'use strict';

describe('Service: words', function () {

  // load the service's module
  beforeEach(module('phraseApp'));

  // instantiate service
  var words;
  beforeEach(inject(function (_words_) {
    words = _words_;
  }));

  it('should do something', function () {
    expect(!!words).toBe(true);
  });

});
