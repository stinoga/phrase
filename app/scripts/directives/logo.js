'use strict';

angular.module('phraseApp')
  .directive('logo', function () {
    return {
      template: '<h1><a href="#/">logoText()</a></h1>',
      restrict: 'E',
      scope: {}
    };

  });
