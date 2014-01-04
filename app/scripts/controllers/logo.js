'use strict';

angular.module('phraseApp')
  .controller('LogoCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.logoText = 'Phrase';
  });
