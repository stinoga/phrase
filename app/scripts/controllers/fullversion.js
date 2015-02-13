'use strict';

angular.module('phraseApp')
  .controller('FullversionCtrl', function ($rootScope, $scope, $storekit, page, localStorageService) {
    $rootScope.pageName = page.get();

    // Buy an in app purchase
    $scope.getPurchase = function (iap) {
      $storekit.purchase(iap);
    }

    // Restore in app purchases
    $scope.restorePurchases = function () {
      $storekit.restore();
    }

    // watch for purchases
    $storekit
        .watchPurchases()
        .then(function () {
          // Not currently used
        }, function (error) {
          // An error occured. Show a message to the user
          alert($rootScope.messages.purchaseError);
        }, function (purchase) {
          if (purchase.productId === 'full_version') {
            // You've got the full version, so we'll store it for later
            localStorageService.add('full_version', true);

            // Enable the full version features
            $rootScope.isFull = true;

            // Open the thanks page
            $rootScope.go('/thanks');
          }
        });
  });
