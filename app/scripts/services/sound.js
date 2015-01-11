'use strict';

angular.module('PhoneGap')
  .factory('sound', function ( $window, PhoneGap ) {

    // Audio player
    var myMedia = null,
        srcCache,
        systemPath = $window.location.pathname,
        mediaPath = systemPath.substr( systemPath, systemPath.length - 10 ) + 'audio/';
        // mediaPath = 'audio/';

    // Play audio
    function playAudio( src ) {
      PhoneGap.ready().then(function () {
        // If we haven't loaded media yet, or if new a new media src comes in,
        // let's load new media using PhoneGap
        if (myMedia === null || srcCache !== src) {
          // Create Media object from src
          myMedia = new Media(decodeURI(mediaPath + src + '.aac'), onSuccess, onError);
        }

        // Cache our file so we don't call for media again
        srcCache = src;

        // Play audio
        myMedia.play();
      });
    }

    // Pause audio
    function pauseAudio() {
      if (myMedia) {
        myMedia.pause();
      }
    }

    // Stop audio
    function stopAudio() {
      if (myMedia) {
        myMedia.stop();
      }
    }

    // onSuccess Callback
    function onSuccess() {
      // console.log('playAudio():Audio Success');
    }

    // onError Callback
    function onError( error ) {
      // alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
    }

    return {
      play: playAudio,
      pause: pauseAudio,
      stop: stopAudio
    };

  });
