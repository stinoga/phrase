'use strict';

describe('Directive: phLogo', function () {

  // load the directive's module
  beforeEach(module('phraseApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ph-logo></ph-logo>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the logo directive');
  }));
});
