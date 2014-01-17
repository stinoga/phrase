'use strict';

angular.module('phraseApp')
  .factory('settings', function ( localStorageService ) {

    var CONFIG = {
        'Category': {
          'default': 'Popular',
          'options': [
            {
              'id': 0,
              'name': 'Popular',
              'live': true
            },
            {
              'id': 1,
              'name': 'Movies',
              'live': false
            },
            {
              'id': 2,
              'name': 'Search Terms',
              'live': false
            },
            {
              'id': 3,
              'name': 'Star Wars',
              'live': false
            },
            {
              'id': 4,
              'name': 'Books',
              'live': false
            },
            {
              'id': 5,
              'name': 'The 90\'s',
              'live': false
            },
            {
              'id': 6,
              'name': 'The 80\'s',
              'live': false
            }
          ]
        },
        'Timer': {
          'default': 'Visual',
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
        }
      };

    function getSetting( key ) {
      return localStorageService.get(key) || CONFIG[key]['default'];
    }

    function setSetting( key, value ) {
      localStorageService.add(key, value);
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
      set: setSetting,
      options: getOptions,
      all: getAll
    };

  });
