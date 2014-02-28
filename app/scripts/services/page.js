'use strict';

angular.module('phraseApp')
  .factory('page', function ($location) {

    // Get our current page name
    function getRoute (argument) {
      var currentRoute = $location.path().substring(1) || 'home';
      return currentRoute;
    }

    // Return it for all to use :)
    return {
      get: getRoute
    };
  });
