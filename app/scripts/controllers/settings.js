'use strict';

angular.module('phraseApp')
  .controller('SettingsCtrl', function ($rootScope, $scope, $filter, settings, page) {
    $rootScope.pageName = page.get();

    $scope.Categories = settings.options('Category');
    $scope.Timers = settings.options('Timer');
    $scope.Skins = settings.options('Skin');

    // This will enable our correct option to be selected based on localStorage
    // TODO: There needs to be a better way to do this
    $scope.onCategory = $scope.Categories[settings.get('Category').id];
    $scope.onTimer = $scope.Timers[settings.get('Timer').id];
    $scope.onSkin = $scope.Skins[settings.get('Skin').id];

    $scope.saveSetting = function ( key, value, index ) {
      // If its our first element, and we aren't already open, open the select div
      if (index === 0 && $scope.activeSetting !== key) {
        $scope.activeSetting = key;
      } else {
        $scope.activeSetting = null;
      }

      // Local scoped vars for each setting
      if (key === 'Category') {
        $scope.onCategory = value;
        console.log($scope.onCategory);
      } else if (key === 'Skin') {
        $rootScope.skin = $filter('slugFilter')(value.name, '_');
        $scope.onSkin = value;
      } else {
        $scope.onTimer = value;
      }

      // Save our setting
      settings.set(key, value);
    };

    $scope.selectHeight = function (index) {
      return 'height: ' + (2.7 * index) + 'rem';
    };
  });
