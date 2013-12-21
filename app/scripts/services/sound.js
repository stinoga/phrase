'use strict';

angular.module('phraseApp')
  .factory('sound', function ( $window) {

    var soundOk = false;

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

  });
