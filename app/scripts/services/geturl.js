'use strict';

angular.module('phraseApp')
  .factory('geturl', function ( $window, PhoneGap ) {

    function getUrl (url) {
      PhoneGap.ready().then(function () {
        var ref = $window.open(url, '_blank', 'location=yes');
      });
    }

    // Public API here
    return {
      get: getUrl
    };
  });
