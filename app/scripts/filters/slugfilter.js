'use strict';

angular.module('phraseApp')
  .filter('slugFilter', function () {
    return function (input, delimeter, specialChars) {
      var initialSlug;
      if (input) {
        if (specialChars) {
          // Filter out any non-alphanumeric characters, and some special characters
          // Replace them with an delimeter
          initialSlug = input.toLowerCase().replace(/[^0-9a-z_`'"’,.!-]/g, delimeter);
        } else {
          // Filter out any non-alphanumeric characters
          // Replace them with an delimeter
          initialSlug = input.toLowerCase().replace(/[^0-9a-z_]/g, delimeter);
        }
        // Return our slug, minus any quotes
        return initialSlug.replace(/['"]/g, '’');
      }
    };
  });
