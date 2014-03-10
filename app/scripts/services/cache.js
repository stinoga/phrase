'use strict';

// This module should cache any remote API data into localstorage

angular.module('phraseApp')
  .factory('cache', function ( $http, localStorageService, $filter ) {
    function setCache ( key ) {
      var lowKey = $filter('slugFilter')(key),
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
          alert('Words? We don\'t need no stinking words!\nLooks like your internet is down Hoss. Try one of our other categories.');
        });
    }

    // Public API here
    return {
      set: setCache
    };
  });
