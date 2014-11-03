'use strict';

describe('Controller: ThanksCtrl', function () {

  // load the controller's module
  beforeEach(module('phraseApp'));

  var ThanksCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ThanksCtrl = $controller('ThanksCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
