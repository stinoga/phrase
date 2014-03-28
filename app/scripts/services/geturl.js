'use strict';

angular.module('phraseApp')
  .factory('geturl', function ( $window, PhoneGap ) {

    function getUrl (url, rootUrl) {
      var fullUrl = rootUrl ? rootUrl + url : url;

      PhoneGap.ready().then(function () {
        var ref = $window.open(fullUrl, '_blank', 'location=yes');
      });
      console.log(fullUrl);
    }

    // Public API here
    return {
      get: getUrl
    };
  });
