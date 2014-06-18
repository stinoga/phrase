'use strict';

angular.module('phraseApp')
  .controller('LogoCtrl', function ($scope, $rootScope) {
    $scope.logoText = 'Phrase';

    function logoSetup () {
      $scope.logoLink = $rootScope.pageName === 'play' ? '/score' : '/';
    }

    $rootScope.$watch('pageName', logoSetup);
  });
