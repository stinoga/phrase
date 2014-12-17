'use strict';

angular.module('phraseApp')
  .directive('face', function () {

    return {
      templateUrl: 'views/directives/face.html',
      restrict: 'E',
      replace: true,
      scope: {
        faceType: '=',
        faceText: '@'
      },
      controller: function ($scope, $element) {
      }
    };

  });
