'use strict';

angular.module('phraseApp')
  .factory('timer', function ( $timeout, $window, settings, sound ) {

    function timerSetting() {
      return settings.get('Timer').name;
    }

    // TODO: Store these constants in a config like our other factories
    var DEFAULT_DURATION = 50,
        NOOP = function() {},
        HURRY_PROGRESS = 20,
        UHOH_PROGRESS = 50,
        TERRIFY_PROGRESS = 70,
        NORMAL_BEEP_MS = 900,
        HURRY_BEEP_MS = 600,
        UHOH_BEEP_MS = 225,
        TERRIFY_BEEP_MS = 120;

    function howUrgent( progress ) {
      var urgency = 'normal';

      if (progress >= TERRIFY_PROGRESS) {
        urgency = 'terrify';
      } else if (progress > UHOH_PROGRESS) {
        urgency = 'uhoh';
      } else if (progress > HURRY_PROGRESS) {
        urgency = 'hurry';
      }

      return urgency;
    }

    function shouldBeep( progress, lastMillisecond, currentMillisecond ) {
      var shouldI = false,
          diff = currentMillisecond - (lastMillisecond || 0);

      if (progress >= TERRIFY_PROGRESS && diff >= TERRIFY_BEEP_MS) {
        shouldI = true;
      } else if (progress > UHOH_PROGRESS && diff > UHOH_BEEP_MS) {
        shouldI = true;
      } else if (progress > HURRY_PROGRESS && diff > HURRY_BEEP_MS) {
        shouldI = true;
      } else if (diff > NORMAL_BEEP_MS) {
        shouldI = true;
      }

      return shouldI;
    }

    // This is our constructor for the timer object
    function Timer( duration ) {
      this.started = Date.now();
      this.seconds = duration;
      this.duration = duration;
      this.progress = 0;
      this.urgency = 'normal';
      this.done = false;
      this.audible = timerSetting();
    }

    // Attach a new update prototype to our timer object
    Timer.prototype.update = function() {
      // The timer is finished, so let's return rather than going forward
      if (this.done) {
        return;
      }

      var millisecondsSince = Date.now() - this.started;

      this.seconds = this.duration - Math.floor(millisecondsSince / 1000);
      this.progress = 100 - Math.floor(100 * this.seconds / this.duration);
      this.urgency = howUrgent(this.progress);

      if (this.progress === 100) {
        this.done = true;
      }

      if ((this.audible !== 'Visual') && shouldBeep(this.progress, this._lastBeep, millisecondsSince)) {
        this._lastBeep = millisecondsSince;
        sound.play('beep');
      }
    };

    // This forces the user to settings any time they leave the game
    Timer.prototype.kill = function() {
      this.done = true;
    };

    return function( opts ) {
      // TODO: in the future, we may want duration as a global option
      var duration = (opts && opts.duration) || DEFAULT_DURATION,
          onDone = (opts && opts.done) || NOOP,
          onUpdate = (opts && opts.update) || NOOP;

      var timer = new Timer(duration);

      function checkTimer() {
        timer.update();
        onUpdate();


        if (timer.done) {
          onDone();

          if (timer.audible !== 'Visual') {
            // Stop any sound currently running, it's buzzer time
            sound.stop();
            sound.play('buzzer');
          }

        } else {
          $timeout(checkTimer, 100);
        }
      }

      checkTimer();

      return timer;
    };

  });
