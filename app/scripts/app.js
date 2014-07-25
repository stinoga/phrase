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
      .when('/full-version', {
        templateUrl: 'views/fullversion.html',
        controller: 'FullversionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function ($rootScope, $location, $window, $filter, settings, device, PhoneGap){
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

    // Setup in app purchasing
    var IAP = {
      list: ["full_version"],
      products: {}
    };


    IAP.load = function () {
      // Check availability of the storekit plugin
      if (!window.storekit) {
        console.log("In-App Purchase Plugin not available");
        return;
      }

      // Initialize
      storekit.init({
        debug:    true, // Enable IAP messages on the console
        ready:    IAP.onReady,
        purchase: IAP.onPurchase,
        restore:  IAP.onRestore,
        error:    IAP.onError
      });
    };

    // StoreKit's callbacks (we'll talk about them later)
    IAP.onPurchase = function () {};
    IAP.onRestore = function () {};

    IAP.onError = function () {
      console.log('Error: ' + errorMessage);
    };

    IAP.onReady = function () {
      console.log('READY');

      // Once setup is done, load all product data.
      storekit.load(IAP.list, function (products, invalidIds) {
        console.log('IAPs loading done:');

        IAP.products = products;
        IAP.loaded = true;
        for (var i = 0; i < invalidIds.length; ++i) {
          console.log("Error: could not load " + invalidIds[i]);
        }
      });
      IAP.render();
    };

    // If we're on an ios7 device, set our iosVersion class for specific styles
    PhoneGap.ready().then(function () {
      $rootScope.iosVersion = (parseFloat($window.device.version) >= 7 && $window.device.platform === 'iOS') ? true : false;

      IAP.load();

      IAP.render = function () {
        if (IAP.loaded) {
          var fullVersion  = IAP.products["full_version"];
          for (var id in IAP.products) {
            var prod = IAP.products[id];

            console.log(prod.title, prod.description, prod.id, prod.price);
          }
        }
        else {
          console.log("In-App Purchases not available!", IAP);
          console.dir(IAP);
        }
      };
    });

  });
