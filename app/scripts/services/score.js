'use strict';

angular.module('phraseApp')
  .factory('score', function ( localStorageService, $timeout, $location ) {

    // Grab the localStorage value for each score
    // If its null, set it to zero
    function getScore( item, nullValue ) {
      var lsItem = localStorageService.get(item);
      if (!lsItem){
        return nullValue;
      } else {
        return lsItem;
      }
    }

    // Model for each team's score
    var CONFIG = [
          {
            'id': 1,
            'score': getScore('ls_score1', 0),
            'winner': 0
          },
          {
            'id': 2,
            'score': getScore('ls_score2', 0),
            'winner': 0
          }
        ],
        SCORE_MAX = 7,
        SCORE_MIN = 0;

    function clearScore() {
      // clear out local storage keys for all scores
      // reset scores in config
      angular.forEach(CONFIG, function( key ) {
        CONFIG[0].score = 0;
        CONFIG[1].score = 0;
        localStorageService.remove('ls_score' + key.id);
      });
    }

    function setScore( key, direction ) {
      var teamId = CONFIG[key - 1];

      // Let's only set the score if we're below the max
      if (teamId.score < SCORE_MAX) {
        if (direction) {
          teamId.score++;
        } else {
          if (teamId.score > SCORE_MIN) {
            teamId.score--;
          }
        }
        localStorageService.add('ls_score' + key, teamId.score);
        // If the score is greater than or equal to 7, then the game is over
        if (teamId.score === SCORE_MAX) {
          // timeout the change so it aligns with the animation
          $timeout(function() {
            // set the winnning team
            teamId.winner = 1;

            // Store the game data
            localStorageService.add('last_game', CONFIG);

            // Clear scores
            clearScore();

            $location.path('/end');
          }, 400);
        }
      }
    }

    function getAll() {
      return CONFIG;
    }

    // Public API here
    return {
      get: getScore,
      set: setScore,
      all: getAll,
      clear: clearScore
    };

  });
