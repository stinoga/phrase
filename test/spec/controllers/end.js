'use strict';

describe('Controller: EndCtrl', function () {

  // load the controller's module
  beforeEach(module('phraseApp'));

  var EndCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EndCtrl = $controller('EndCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
