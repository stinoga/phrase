'use strict';

angular.module('phraseApp')
  .factory('settings', function ( $rootScope, $filter, localStorageService, cache ) {

    var CONFIG = {
        'Category': {
          'options': [
            {
              'id': 0,
              'name': 'Popular',
              'live': true,
              'free': true
            },
            {
              'id': 1,
              'name': 'Everything',
              'live': false
            },
            {
              'id': 2,
              'name': 'Movies',
              'live': false,
              'free': true
            },
            {
              'id': 3,
              'name': 'The Web',
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
              'name': 'The 80s/90s',
              'live': false
            },
            {
              'id': 8,
              'name': 'Music',
              'live': false
            },
            {
              'id': 9,
              'name': 'History',
              'live': false
            }
          ]
        },
        'Timer': {
          'options': [
            {
              'id': 0,
              'name': 'Audible',
              'free': true
            },
            {
              'id': 1,
              'name': 'Visual',
              'free': true
            },
            {
              'id': 2,
              'name': 'Both'
            }
          ]
        },
        'TimerLength': {
          'options': [
            {
              'id': 0,
              'name': ':45',
              'free': true
            },
            {
              'id': 1,
              'name': ':50'
            },
            {
              'id': 2,
              'name': '1:00'
            },
            {
              'id': 3,
              'name': '1:30'
            },
            {
              'id': 4,
              'name': '2:00'
            },
            {
              'id': 5,
              'name': '5:00'
            }
          ]
        },
        'Skin': {
          'options': [
            {
              'id': 0,
              'name': 'Phrase',
              'colors': [
                '#3CF',
                '#FFF',
                '#E57250'
              ]
            },
            {
              'id': 1,
              'name': 'Film Noir',
              'colors': [
                '#3E3E3E',
                '#FBFBFB',
                '#8B8B8B'
              ]
            },
            {
              'id': 2,
              'name': 'GitHub',
              'colors': [
                '#6CC644',
                '#FFF',
                '#4183C4'
              ]
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
          lowKey = $filter('slugFilter')(cacheKey, '_'),
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

      // If we are going to use our remote API, store the data in localStorage.
      // If not, make sure we tell the app the internet is OK since we are using local data.
      if (value.live) {
        setCache(value.name);
      } else {
        $rootScope.nadaInternet = undefined;
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
