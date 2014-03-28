'use strict';

angular.module('phraseApp')
  .controller('SettingsCtrl', function ($rootScope, $scope, $filter, settings, page) {
    $rootScope.pageName = page.get();

    $scope.Categories = settings.options('Category');
    $scope.Timers = settings.options('Timer');
    $scope.Skins = settings.options('Skin');

    // This will enable our correct option to be selected based on localStorage
    // TODO: There needs to be a better way to do this
    $scope.Category = $scope.Categories[settings.get('Category').id];
    $scope.Timer = $scope.Timers[settings.get('Timer').id];
    $scope.Skin = $scope.Skins[settings.get('Skin').id];

    $scope.saveSetting = function( key ) {
      settings.set(key, $scope[key]);

      if (key === 'Skin') {
        $rootScope.skin = $filter('slugFilter')($scope[key].name, '_');
      }
    };
  });
