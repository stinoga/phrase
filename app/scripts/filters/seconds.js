'use strict';

angular.module('phraseApp')
  .filter('seconds', function () {
    return function (input) {
      var timeArray = input.split(':'),
          minutes = timeArray[0] * 60,
          seconds = parseInt(timeArray[1]),
          totalTime = minutes + seconds;

      return totalTime;
    };
  });
