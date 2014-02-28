'use strict';

angular.module('phraseApp')
  .controller('EndCtrl', function ($rootScope, $scope, score, page) {
    $rootScope.pageName = page.get();

    $scope.teams = score.all();

    console.log($scope.teams);

  });
