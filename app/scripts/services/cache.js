'use strict';

// This module should cache any remote API data into localstorage

angular.module('phraseApp')
  .factory('cache', function ( $rootScope, $http, localStorageService, $filter, $location ) {
    function setCache ( key ) {
      var lowKey = $filter('slugFilter')(key, '_'),
          currTime = new Date();

      function storeData ( data ) {
        console.log('caching.... ' + key);
        // Save data locally
        localStorageService.add(lowKey, data);
        // Store timestamp
        localStorageService.add(lowKey + '_date', currTime.getTime());
      }

      // Grab data from our API
      // If we find it, let's kick off our function to store it
      $http({method: 'GET', url: 'http://www.pop-phrase.com/api/words/' + lowKey})
        .success(storeData)
        .error(function() {
          alert($rootScope.messages.nadaInternet);
          $rootScope.nadaInternet = true;
          $location.path('/settings');
        });
    }

    // Public API here
    return {
      set: setCache
    };
  });
