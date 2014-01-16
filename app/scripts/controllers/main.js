'use strict';

angular.module('phraseApp')
  .controller('MainCtrl', function ($scope, timer, settings, FileReader) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // FileReader.onDeviceReady();

    $scope.startTimer = function() {

      // WORKS ON TABLET, BUT SUBSEQUENT TIMER CALL DOESN'T PLAY AUDIO
      // var beep = new $window.Howl({
      //       urls: [
      //         'audio/beep.mp3',
      //         'audio/beep.ogg'
      //       ]
      //     });

      if (settings.get('Timer') === 'Audible') {
        // beep.play();
      }

      // TODO: DOESN'T WORK ON TABLET. POSSIBLY SOMETHING WITH TIMER FUNCTION?
      // function round_over() {
      //   $location.path('/score');
      // }

      // timer({ done: round_over });

    };
  });
