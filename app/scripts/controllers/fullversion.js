'use strict';

angular.module('phraseApp')
  .controller('FullversionCtrl', function ($rootScope, $scope, $storekit, page) {
    $rootScope.pageName = page.get();

    // Buy the full app
    $scope.getFullVersion = function (argument) {
      $storekit.purchase('full_version');
    }
  });
