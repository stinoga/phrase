'use strict';

angular.module('phraseApp')
  .directive('phSkin', function () {
    return {
      template: '<link rel="stylesheet" href="styles/skins/{{skin}}.css">',
      restrict: 'E'
    };
  });
