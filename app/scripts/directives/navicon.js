'use strict';

angular.module('phraseApp')
  .directive('phNavIcon', function () {

    var navState = function (scope, element) {

      var menuBtn = angular.element(element.children()[0]),
          navigation = document.getElementsByTagName('nav')[0],
          opened = true;

      // Toggle the closed/opened state
      function toggle() {
        opened = !opened;
        navigation.className = (opened ? 'mainNav ng-scope closed' : 'mainNav ng-scope active');
      }

      // menu button click
      menuBtn.bind('click', toggle);

    };
    return {
      template: '<a href="" ng-click="navState()" class="menuBtn">Menu</a>',
      restrict: 'E',
      link: navState,
      scope: {}
    };

  });
