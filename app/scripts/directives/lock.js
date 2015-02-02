'use strict';

angular.module('phraseApp')
  .directive('lock', function () {
    return {
      templateUrl: 'views/directives/lock.html',
      restrict: 'E',
      replace: true
    };
  });
