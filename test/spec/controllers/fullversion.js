'use strict';

describe('Controller: FullversionCtrl', function () {

  // load the controller's module
  beforeEach(module('phraseApp'));

  var FullversionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FullversionCtrl = $controller('FullversionCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
