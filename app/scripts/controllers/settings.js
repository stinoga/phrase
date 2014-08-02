'use strict';

angular.module('phraseApp')
  .controller('SettingsCtrl', function ($rootScope, $scope, $filter, settings, page) {
    $rootScope.pageName = page.get();

    $scope.Categories = settings.options('Category');
    $scope.Timers = settings.options('Timer');
    $scope.Skins = settings.options('Skin');
  });
