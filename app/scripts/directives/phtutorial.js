'use strict';

angular.module('phraseApp')
  .directive('phTutorial', function ($rootScope) {
    return {
      templateUrl: 'views/directives/tutorial.html',
      replace: true,
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        if ($rootScope.tutorial === true) {

        }
      }
    };
  });
