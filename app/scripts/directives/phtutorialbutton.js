'use strict';

angular.module('phraseApp')
  .directive('phTutorialButton', function ($rootScope) {
    return {
      templateUrl: 'views/directives/tutorialbutton.html',
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element, attrs) {
        $rootScope.$watch('nextPage', function (nextPage) {
          scope.finalPage = function() {
            return nextPage === 9;
          };

          // Set the url for the next page in the tutorial
          scope.nextPage = scope.finalPage() ? '/home' : '/tutorial/' + nextPage;
        });
      }
    };
  });
