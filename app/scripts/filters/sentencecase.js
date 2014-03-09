'use strict';

angular.module('phraseApp')
  .filter('sentencecase', function () {
    return function (input) {
      return 'sentencecase filter: ' + input;
    };
  });
