'use strict';

// This module should cache any remote API data into localstorage

angular.module('phraseApp')
  .factory('cache', function ( $http, localStorageService ) {
    function setCache ( key ) {
      var lowKey = key.toLowerCase().replace(/[^a-z_]/g, '_'),
          currTime = new Date();

      function storeData ( data) {
        // Save data locally
        localStorageService.add(lowKey, data);
        // Store timestamp
        localStorageService.add(lowKey + '_date', currTime.getTime());
      }

      $http.get('http://www.pop-phrase.com/api/words/' + lowKey).success(storeData);
    }

    // Public API here
    return {
      set: setCache
    };
  });
