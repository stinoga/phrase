'use strict';

angular.module('phraseApp')
  .directive('sort', function () {
    return {
      restrict: 'A',
      transclude: true,
      template :
        '<a ng-click="onClick()">'+
          '<span ng-transclude></span> <span class="glyph_icon">{{order === by && !reverse ? \'&#9650;\' : \'&#9660;\'}}</span>'+
        '</a>',
      scope: {
        order: '=',
        by: '=',
        reverse : '='
      },
      link: function(scope) {
        scope.onClick = function () {
          if( scope.order === scope.by ) {
            scope.reverse = !scope.reverse;
          } else {
            scope.by = scope.order ;
            scope.reverse = false;
          }
        };
      }
    };
  });
