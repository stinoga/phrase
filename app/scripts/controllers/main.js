'use strict';

angular.module('phraseApp')
  .controller('MainCtrl', function ($rootScope, $scope, settings, page) {
    $rootScope.pageName = page.get();

    // These will handle storing our default setting values if they
    // haven't been stored in localStorage yet
    $scope.Category = settings.get('Category').id;
    $scope.Timer = settings.get('Timer').id;
  });
