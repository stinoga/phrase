'use strict';

angular.module('phraseApp')
  .directive('phSkin', function () {
    // Write out our skin stylesheet
    return {
      template: '<link ng-if="skin != \'phrase\'" rel="stylesheet" href="styles/skins/{{skin}}.css">',
      restrict: 'E'
    };
  });
