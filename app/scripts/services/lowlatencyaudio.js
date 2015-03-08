'use strict';

angular.module('PhoneGap')
  .factory('lowLatencyAudio', function ( $window ) {

    // Audio player
    var myMedia = null,
        srcCache,
        systemPath = $window.location.pathname,
        mediaPath = 'audio/';

    // Preload effects
    // The preloadFX function loads an audio file into memory.  These are lower-level audio methods and have minimal overhead.
    // These assets should be short (less than 5 seconds). These assets are fully concurrent and polyphonic.
    function preloadFX(src) {
      LowLatencyAudio.preloadFX(src, decodeURI(mediaPath + src + '.aac'), function () {
        // console.log('PRELOAD FX SUCCESS');
      }, function () {
        // console.log('FAAAAAAAAIL');
      });
    }

    // Preload audio
    // These have more overhead than assets laoded via preloadFX, and can be looped/stopped.
    function preloadAudio(src) {
      LowLatencyAudio.preloadAudio(src, decodeURI(mediaPath + src + '.aac'), 1, function () {
        // console.log('PRELOAD AUDIO SUCCESS');
      }, function () {
        // console.log('PRELOAD AUDIO FAAAAAAAAIL');
      });
    }

    // Stop audio
    function stopAudio() {
      LowLatencyAudio.stop(src);
    }

    // Play audio
    function playAudio( src ) {
      LowLatencyAudio.play(src, function (int) {
        // console.log('PLAY SUCCESS', int);
      }, function () {
        // console.log('PLAY FAAAAAAAAIL');
      });
    }

    return {
      play: playAudio,
      stop: stopAudio,
      preloadFX: preloadFX,
      preloadAudio: preloadAudio
    };

  });
