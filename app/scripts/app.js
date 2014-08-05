'use strict';

angular.module('phraseApp', [
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'PhoneGap',
  'LocalStorageModule',
  'ngTouch',
  'ngAnimate',
  'ngStorekit'
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
      .when('/full-version', {
        templateUrl: 'views/fullversion.html',
        controller: 'FullversionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function ($rootScope, $location, $window, $filter, $storekit, settings, device, PhoneGap){
    // Using this location function globally as ngTouch seems to stop
    // href calls from working. We'll call this with ng-click.
    $rootScope.go = function ( path ) {
      $location.path( path );
    };

    // Set our ios version and skin on load
    $rootScope.iosVersion = false;
    $rootScope.skin = $filter('slugFilter')(settings.get('Skin').name, '_');

    // Is this the full version?
    $rootScope.isFull = false;

    // App messages
    $rootScope.messages = {
      nadaInternet: 'Words? We don\'t need no stinking words!\n\nLooks like your internet is down Dobbs. Try one of our other categories, or get some internets.',
      nadaSound: 'You talkin\' to me?\n\n Looks like your sound is muted. Might want to turn that on.',
      fullCategory: 'You\'ll need the full version of the app to use this category.'
    };

    // If we're on an ios7 device, set our iosVersion class for specific styles
    PhoneGap.ready().then(function () {
      $rootScope.iosVersion = (parseFloat($window.device.version) >= 7 && $window.device.platform === 'iOS') ? true : false;

      $storekit
        .setLogging(true)
        .load(['full_version'])
        .then(function (products) {
          console.dir(products);
        })
        .catch(function () {
          console.log('no products loaded');
        });
    });

  });
