'use strict';

angular.module('phraseApp')
  .filter('sentencecase', function () {
    return function(input, all) {
      if (input!=null) {
        input = input.toLowerCase();
        return input.substring(0,1).toUpperCase()+input.substring(1);
      }
    }
  });
