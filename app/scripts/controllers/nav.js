'use strict';

angular.module('phraseApp')
  .controller('NavCtrl', function ($scope, $location, page) {
    // Adding the appropriate class to our main navigation
    $scope.navClass = function ( pageName ) {
      // Get the current location path
      // Pull out the / using substring
      var currentRoute = page.get();

      // If our page var matches the current route, return active
      return pageName === currentRoute ? 'active' : '';
    };

  });
