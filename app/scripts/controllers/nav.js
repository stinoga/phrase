'use strict';

angular.module('phraseApp')
  .controller('NavCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // Get the current location path
    // Pull out the / using substring
    var currentRoute = $location.path().substring(1) || 'home';

    // Adding the appropriate class to our main navigation
    $scope.navClass = function (page) {
      // If our page var matches the current route, return active
      return page === currentRoute ? 'active' : '';
    };

    $scope.logoText = function () {
      return currentRoute === 'home' ? 'Phrase' : 'P';
    };

  });
