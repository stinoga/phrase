'use strict';

angular.module('phraseApp')
  .factory('settings', function ( localStorageService, cache, $filter ) {

    var CONFIG = {
        'Category': {
          'options': [
            {
              'id': 0,
              'name': 'Popular',
              'live': true
            },
            {
              'id': 1,
              'name': 'Everything',
              'live': false
            },
            {
              'id': 2,
              'name': 'Movies',
              'live': false
            },
            {
              'id': 3,
              'name': 'Search Terms',
              'live': false
            },
            {
              'id': 4,
              'name': 'Sports',
              'live': false
            },
            {
              'id': 5,
              'name': 'Star Wars',
              'live': false
            },
            {
              'id': 6,
              'name': 'Books',
              'live': false
            },
            {
              'id': 7,
              'name': 'The 90\'s',
              'live': false
            },
            {
              'id': 8,
              'name': 'The 80\'s',
              'live': false
            }
          ]
        },
        'Timer': {
          'options': [
            {
              'id': 0,
              'name': 'Audible'
            },
            {
              'id': 1,
              'name': 'Visual'
            }
          ]
        },
        'Skin': {
          'options': [
            {
              'id': 0,
              'name': 'Phrase'
            },
            {
              'id': 1,
              'name': 'IFTTT'
            },
            {
              'id': 2,
              'name': 'Smashing'
            },
            {
              'id': 3,
              'name': 'Netflix'
            },
            {
              'id': 4,
              'name': 'Twitter'
            },
            {
              'id': 5,
              'name': 'GitHub'
            }
          ]
        }
      };

    function getSetting( key ) {
      // If no setting is stored yet ...
      if (localStorageService.get(key) === null) {
        // Store the first item in localStorage
        setSetting(key, CONFIG[key].options[0]);
        // Return the first item
        return CONFIG[key].options[0];
      } else {
        return localStorageService.get(key);
      }
    }

    function getCache ( cacheKey ) {
      return localStorageService.get(cacheKey);
    }

    function setCache ( cacheKey ) {
      // Current date, date in milliseconds, one day in milliseconds, cache key
      // Grab data from local storage and parse into integer. If no date is
      // stored yet, default it to zero so we store it.
      var currTime = new Date(),
          currMili = currTime.getTime(),
          oneDay = 86400000,
          lowKey = $filter('slugFilter')(cacheKey),
          cacheDate = localStorageService.get(lowKey + '_date') || 0,
          cacheTime = parseInt(cacheDate, 10);

      // If the stored date isn't within the last day, let's ping out to the API
      if((currMili - cacheTime) > oneDay) {
        cache.set(cacheKey);
      }
    }

    function setSetting( key, value ) {
      // Save our setting into localstorage
      localStorageService.add(key, value);

      // If we are going to use our remote API, store the data in localStorage
      if (value.live) {
        setCache(value.name);
      }
    }

    function getOptions( key ) {
      return CONFIG[key].options;
    }

    function getAll() {
      return Object.keys(CONFIG);
    }

    // Public API here
    return {
      get: getSetting,
      getCache: getCache,
      set: setSetting,
      options: getOptions,
      all: getAll
    };

  });
