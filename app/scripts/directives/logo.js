'use strict';

angular.module('phraseApp')
  .directive('phLogo', function () {
    return {
      template: '<h1><a ng-click="go(\'{{logoLink}}\')">{{logoText}}</a></h1>',
      restrict: 'E',
      replace: true
    };

  });
