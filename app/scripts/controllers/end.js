'use strict';

angular.module('phraseApp')
  .controller('EndCtrl', function ($rootScope, $scope, localStorageService, score, page) {
    $rootScope.pageName = page.get();

    $scope.teams = localStorageService.get('last_game');
  });
