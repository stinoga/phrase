'use strict';

angular.module('PhoneGap')
  .factory('sound', function ( $window, PhoneGap ) {

    // var soundOk = false;

    // function checkSound() {
    //   if (soundOk) {
    //     return;
    //   }

    //   // create empty buffer and play it
    //   var buffer = myContext.createBuffer(1, 1, 22050),
    //       source = myContext.createBufferSource();

    //   source.buffer = buffer;
    //   source.connect(myContext.destination);
    //   source.noteOn(0);

    //   // by checking the play state after some time, we know if we're really unlocked
    //   setTimeout(function() {
    //     if((source.playbackState === source.PLAYING_STATE || source.playbackState === source.FINISHED_STATE)) {
    //       soundOk = true;
    //     }
    //   }, 0);

    // }

    // $window.addEventListener('touchstart', checkSound, false);
    // $window.addEventListener('click', checkSound, false);

    // Audio player
    var myMedia = null,
        mediaTimer = null;

    // Play audio
    function playAudio(src) {
      PhoneGap.ready().then(function () {
        if (myMedia === null) {
          // Create Media object from src
          myMedia = new Media('audio/' + src + '.mp3', onSuccess, onError);
        }
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
      clearInterval(mediaTimer);
      mediaTimer = null;
    }

    // onSuccess Callback
    function onSuccess() {
      console.log('playAudio():Audio Success');
    }

    // onError Callback
    function onError(error) {
      alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
    }

    return {
      play: playAudio,
      pause: pauseAudio,
      stop: stopAudio
    };

  });
