'use strict';

describe('Service: lowLatencyAudio', function () {

  // load the service's module
  beforeEach(module('phraseApp'));

  // instantiate service
  var lowLatencyAudio;
  beforeEach(inject(function (_lowLatencyAudio_) {
    lowLatencyAudio = _lowLatencyAudio_;
  }));

  it('should do something', function () {
    expect(!!lowLatencyAudio).toBe(true);
  });

});
