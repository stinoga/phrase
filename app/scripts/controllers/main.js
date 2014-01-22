'use strict';

angular.module('phraseApp')
  .controller('MainCtrl', function ($scope, timer, settings, sound) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    // These will handle storing our default setting values if they
    // haven't been stored in localStorage yet
    $scope.Category = settings.get('Category').id;
    $scope.Timer = settings.get('Timer').id;

    if (settings.get('Timer').name === 'Audible') {
      sound.play('test');
    }

    $scope.startTimer = function() {

      // WORKS ON TABLET, BUT SUBSEQUENT TIMER CALL DOESN'T PLAY AUDIO
      // var beep = new $window.Howl({
      //       urls: [
      //         'audio/beep.mp3',
      //         'audio/beep.ogg'
      //       ]
      //     });

      // TODO: DOESN'T WORK ON TABLET. POSSIBLY SOMETHING WITH TIMER FUNCTION?
      // function round_over() {
      //   $location.path('/score');
      // }

      // timer({ done: round_over });

    };
  });
