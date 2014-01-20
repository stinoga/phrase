'use strict';

// This module should cache any remote API data into localstorage

angular.module('phraseApp')
  .factory('cache', function ( $http, localStorageService ) {
    function setCache ( key ) {
      var lowKey = key.toLowerCase().replace(/[^a-z_]/g, '_');

      function storeData ( data, status) {
        console.log('cache status', status);
        localStorageService.add(lowKey, data);
      }

      $http.get('http://www.pop-phrase.com/api/words/' + lowKey).success(storeData);
    }

    // Public API here
    return {
      set: setCache
    };
  });
