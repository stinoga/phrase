'use strict';

// Filter data by id, and take current item and move it to the top

angular.module('phraseApp')
  .filter('movefirst', function () {
    return function (list, current) {
      var newList = [];
      angular.forEach(list, function (topItem) {
        if (topItem.id === current) {
          newList.unshift(topItem);
        }
        else {
          newList.push(topItem);
        }
      });
      return newList;
    };
  });
