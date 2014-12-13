'use strict';

angular.module('phraseApp')
  .directive('focus', function ($timeout, $parse) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        attrs.$observe('focus', function(value) {
          if(value === 'true') {
            $timeout(function() {
              element[0].focus(); 
            });
          }
        });
      }
    };
  });
