'use strict';

angular.module('phraseApp')
  .directive('navIcon', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the navIcon directive');
      }
    };
  });
