'use strict';

angular.module('phraseApp')
  .directive('phNavIcon', function ($rootScope) {

    var navState = function (scope, element) {

      var menuBtn = angular.element(element.children()[0]),
          navigation = document.getElementsByTagName('nav')[0],
          opened = true;

      // If we're on the play page, toggle the nav state to off
      $rootScope.$watch('pageName', function () {
        if ($rootScope.pageName == 'play' && opened == false) {
          toggle();
        };
      });

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
      scope: true
    };

  });
