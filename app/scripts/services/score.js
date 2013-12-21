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
        SCORE_MAX = 7;

    function setScore( key, direction ) {
      var teamId = CONFIG[key - 1];

      if (teamId.score < SCORE_MAX) {
        if (direction) {
          teamId.score++;
        } else {
          teamId.score--;
        }
        localStorageService.add('ls_score' + key, teamId.score);
        // If the score is greater than or equal to 7, then the game is over
        if (teamId.score === SCORE_MAX) {
          // timeout the change so it aligns with the animation
          $timeout(function() {
            // set the winnning team
            teamId.winner = 1;

            // clear out local storage keys for all scores
            angular.forEach(CONFIG, function( key ) {
              localStorageService.remove('ls_score' + key.id);
            });
            $location.path('/end');
          }, 400);
        }
      }
    }

    function getAll() {
      return CONFIG;
    }

    return {
      get: getScore,
      set: setScore,
      all: getAll
    };

  });
