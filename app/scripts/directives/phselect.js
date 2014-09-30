'use strict';

angular.module('phraseApp')
  .directive('phSelect', function ($filter, $location, settings) {

    return {
      templateUrl: 'views/directives/select.html',
      restrict: 'E',
      replace: true,
      scope: {
        selectLabel: '@',
        selectLabelSpecial: '@',
        selectClass: '@',
        selectItems: '=',
        selectSkins: '@',
        activeSetting: '='
      },
      controller: function ($scope, $rootScope, $element) {

        // Set selected item on load from settings
        $scope.selectedItem = $scope.selectItems[settings.get($scope.selectLabel).id];

        $scope.saveSetting = function ( key, value, index ) {
          // If its our first element, and we aren't already open, open the select div
          // If not, select the setting
          if (index === 0 && $scope.activeSetting !== key) {
            $scope.activeSetting = key;
          } else {
            // Only set the setting if this is either the full version, or a free settting
            if (!$rootScope.isFull && !value.free) {
              $location.path('/full-version');

              return false;
            }

            $scope.activeSetting = null;

            // Set selected item
            $scope.selectedItem = value;

            // Set the rootscope if we are setting a skin
            // We should use $emit in the future rather than $rootscope
            if (key === 'Skin') {
              $rootScope.skin = $filter('slugFilter')(value.name, '_');
            }

            // Save our setting
            settings.set(key, value);
          }
        };

        $scope.selectHeight = function (index) {
          return 'height: ' + (2.7 * index) + 'rem';
        };
      }
    };

  });
