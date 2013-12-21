'use strict';

angular.module('phraseApp')
  .controller('EndCtrl', function ($scope, score) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.teams = score.all();

    console.log($scope.teams);

  });
