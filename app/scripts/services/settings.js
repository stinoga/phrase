'use strict';

angular.module('phraseApp')
  .factory('settings', function ( localStorageService ) {

    var CONFIG = {
        'Category': {
          'default': 'Popular',
          'options': [
            'Popular',
            'Movies',
            'Search Terms',
            'Star Wars',
            'Books',
            'The 90\'s',
            'The 80\'s'
          ]
        },
        'Timer': {
          'default': 'Visual',
          'options': [
            'Audible',
            'Visual'
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
