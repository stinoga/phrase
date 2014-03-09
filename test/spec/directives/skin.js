'use strict';

describe('Directive: phSkin', function () {

  // load the directive's module
  beforeEach(module('phraseApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ph-skin></ph-skin>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the skin directive');
  }));
});
