'use strict';

angular.module('phraseApp')
  .factory('score', function (localStorageService, $timeout, $location) {

    // Grab the localStorage value for each score
    // If its null, set it to zero
    function getScore(item, nullValue) {
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
            'name': getScore('ls_team1name', ''),
            'score': getScore('ls_score1', 0),
            'winner': 0
          },
          {
            'id': 2,
            'name': getScore('ls_team2name', ''),
            'score': getScore('ls_score2', 0),
            'winner': 0
          }
        ],
        SCORE_MAX = 7,
        SCORE_MIN = 0;

    function clearScore(teamNames) {
      // clear out local storage keys for all scores
      // reset scores in config
      angular.forEach(CONFIG, function( key ) {
        CONFIG[0].score = 0;
        CONFIG[1].score = 0;
        CONFIG[0].winner = 0;
        CONFIG[1].winner = 0;

        // Clear team names if needed
        if (teamNames) {
          CONFIG[0].name = '';
          CONFIG[1].name = '';
          setTeam(1, '');
          setTeam(2, '');
        }

        localStorageService.remove('ls_score' + key.id);
      });
    }

    function setScore(key, direction) {
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

    function setTeam (key, value) {
      var teamId = CONFIG[key - 1];

      teamId.name = value;

      localStorageService.add('ls_team' + key + 'name', value);
    }

    function getAll() {
      return CONFIG;
    }

    // Public API here
    return {
      get: getScore,
      set: setScore,
      setTeam: setTeam,
      all: getAll,
      clear: clearScore
    };

  });
