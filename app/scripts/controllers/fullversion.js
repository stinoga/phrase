'use strict';

angular.module('phraseApp')
  .controller('FullversionCtrl', function ($rootScope, $scope, $storekit, page) {
    $rootScope.pageName = page.get();

    // Buy an in app purchase
    $scope.getPurchase = function (iap) {
      $storekit.purchase(iap);
    }

    // Restore in app purchases
    $scope.restorePurchases = function () {
      $storekit.restore(iap);
    }
  });
