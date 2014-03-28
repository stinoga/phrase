'use strict';

angular.module('phraseApp')
  .filter('slugFilter', function () {
    return function (input, delimeter) {
      if (input) {
        // Filter out any non-alphanumeric characters
        // Replace them with an underscore
        return input.toLowerCase().replace(/[^0-9a-z_]/g, delimeter);
      }
    };
  });
