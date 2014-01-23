'use strict';

angular.module('PhoneGap')
  .factory('device', function ( $window, PhoneGap ) {

    // Store our device info on the global $window object
    PhoneGap.ready().then(function () {
      $window.device = device;
    });

  });
