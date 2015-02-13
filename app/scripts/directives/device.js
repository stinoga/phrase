'use strict';

angular.module('phraseApp')
  .directive('device', function () {
    return {
      templateUrl: 'views/directives/device.html',
      restrict: 'E',
      replace: true,
      scope: {
        deviceText: '@',
        deviceText2: '@'
      }
    };
  });
