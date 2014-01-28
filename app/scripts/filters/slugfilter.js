'use strict';

angular.module('phraseApp')
  .filter('slugFilter', function () {
    return function (input) {
      if (input) {
        return input.toLowerCase().replace(/[^a-z_]/g, '_');
      }
    };
  });
