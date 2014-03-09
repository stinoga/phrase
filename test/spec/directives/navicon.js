'use strict';

describe('Directive: phNavIcon', function () {

  // load the directive's module
  beforeEach(module('phraseApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ph-nav-icon></ph-nav-icon>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the navIcon directive');
  }));
});
