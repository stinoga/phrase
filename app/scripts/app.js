'use strict';

angular.module('phraseApp', [
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'PhoneGap',
  'LocalStorageModule',
  'ngTouch',
  'ngAnimate'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/play', {
        templateUrl: 'views/play.html',
        controller: 'PlayCtrl'
      })
      .when('/rules', {
        templateUrl: 'views/rules.html',
        controller: 'RulesCtrl'
      })
      .when('/score', {
        templateUrl: 'views/score.html',
        controller: 'ScoreCtrl'
      })
      .when('/end', {
        templateUrl: 'views/end.html',
        controller: 'EndCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function ($rootScope, $location, $window, device, PhoneGap){
    // Using this location function globally as ngTouch seems to stop
    // href calls from working. We'll call this with ng-click.
    $rootScope.go = function ( path ) {
      $location.path( path );
    };

    $rootScope.iosVersion = false;

    // If we're on an ios7 device, set our iosVersion class for specific styles
    PhoneGap.ready().then(function () {
      $rootScope.iosVersion = (parseFloat($window.device.version) >= 7 && $window.device.platform === 'iOS') ? true : false;
    });

  });
