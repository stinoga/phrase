'use strict';

describe('Controller: RulesCtrl', function () {

  // load the controller's module
  beforeEach(module('phraseApp'));

  var RulesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RulesCtrl = $controller('RulesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
