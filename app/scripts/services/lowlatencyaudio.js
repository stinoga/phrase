'use strict';

angular.module('PhoneGap')
  .factory('lowLatencyAudio', function ( $window ) {

    // Audio player
    var myMedia = null,
        srcCache,
        systemPath = $window.location.pathname,
        mediaPath = systemPath.substr( systemPath, systemPath.length - 10 ) + 'audio/';

    // Preload effects
    // The preloadFX function loads an audio file into memory.  These are lower-level audio methods and have minimal overhead.
    // These assets should be short (less than 5 seconds). These assets are fully concurrent and polyphonic.
    function preloadFX(src) {
      PGLowLatencyAudio.preloadFX(src, decodeURI(mediaPath + src + '.aac'));
    }

    // Preload audio
    // These have more overhead than assets laoded via preloadFX, and can be looped/stopped.
    function preloadAudio(src) {
      PGLowLatencyAudio.preloadAudio(src, decodeURI(mediaPath + src + '.aac'));
    }

    // Stop audio
    function stopAudio() {
      PGLowLatencyAudio.stop(src);
    }

    // Play audio
    function playAudio( src ) {
      // Play audio
      PGLowLatencyAudio.play(src);
    }

    return {
      play: playAudio,
      stop: stopAudio,
      preloadFX: preloadFX,
      preloadAudio: preloadAudio
    };

  });
