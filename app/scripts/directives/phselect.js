'use strict';

angular.module('phraseApp')
  .directive('phSelect', function ($filter, settings) {

    return {
      templateUrl: 'views/directives/select.html',
      restrict: 'E',
      replace: true,
      scope: {
        selectLabel: '@',
        selectLabelSpecial: '@',
        selectClass: '@',
        selectItems: '=',
        selectSkins: '@'
      },
      controller: function ($scope, $rootScope, $element) {

        // Set selected item on load from settings
        $scope.selectedItem = $scope.selectItems[settings.get($scope.selectLabel).id];

        $scope.saveSetting = function ( key, value, index ) {
          // If its our first element, and we aren't already open, open the select div
          if (index === 0 && $scope.activeSetting !== key) {
            $scope.activeSetting = key;
          } else {
            $scope.activeSetting = null;
          }

          // Set selected item
          $scope.selectedItem = value;

          // Set the rootscope if we are setting a skin
          // We should use $emit in the future rather than $rootscope
          if (key === 'Skin') {
            $rootScope.skin = $filter('slugFilter')(value.name, '_');
          }

          // Save our setting
          settings.set(key, value);
        };

        $scope.selectHeight = function (index) {
          return 'height: ' + (2.7 * index) + 'rem';
        };
      }
    };

  });
