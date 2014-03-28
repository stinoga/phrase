'use strict';

angular.module('phraseApp')
  .factory('words', function ( $http, $q, settings, $filter, localStorageService ) {
    var words = [],
        usedWords = JSON.parse(sessionStorage.getItem('usedWords') || 'null') || {},
        roundWords,
        wordCount = 0,
        apiPath = 'data/';

    // Reset our list of words for this round, as well as the start time for our first word.
    function resetRoundWords() {
      var firstWordTime = new Date().getTime();

      roundWords = [];
      localStorageService.add('roundWords', roundWords);
      localStorageService.add('wordStartTime', firstWordTime);
    }

    function timeDifference() {
      var startTime = localStorageService.get('wordStartTime'),
          endTime = new Date().getTime(),
          difference = (endTime - startTime) / 1000,
          differenceRounded = Math.round(difference * 100) / 100;

      // Set our start time for the next word
      localStorageService.add('wordStartTime', endTime);

      return differenceRounded;
    }

    // Grab the selected category, and setup a slug for the name
    function wordListSetting() {
      return $filter('slugFilter')(settings.get('Category').name, '_');
    }

    var wordListId = wordListSetting();

    function onlyUnused( word ) {
      // If the word is in the usedWords array, do not return it
      return word && !usedWords[word];
    }

    function ensureFetched( func ) {
      return function( done ) {
        var latestWl = wordListSetting();

        if (wordListId !== latestWl || !words.length) {
          wordListId = latestWl;

          fetchWords(function() {
            func(done);
          });
        } else {
          func(done);
        }
      };
    }

    function setWords( wordList ) {
      words = wordList;
    }

    function fetchWords( done ) {
      function handleWords( data ) {
        setWords(data);
        done();
      }
      if (settings.get('Category').live === true) {
        // Grab our cached remote API data if this is a live category
        handleWords(settings.getCache(wordListSetting()));
      } else {
        // If not, pull the words from our local API
        // First, let's see it it's the everything category
        if (settings.get('Category').name === 'Everything') {
          var apiArray = [];

          angular.forEach(settings.options('Category'), function (key) {
            if (key.name !== 'Everything' && key.name !== 'Popular') {
              apiArray.push($http.get(apiPath + $filter('slugFilter')(key.name, '_')));
            }
          });

          $q.all(apiArray).then(function (responses) {
            var wordArray = [];

            // TODO: We may want to push this to the inial app load, or possibly
            // when a user selects the everything category, as it's heavy
            angular.forEach(responses, function (response) {
              angular.forEach(response.data, function (responseWord) {
                wordArray.push(responseWord);
              });
            });
            handleWords(wordArray);
          });
        } else {
          // If not, pull the words from our local API
          $http.get(apiPath + wordListId).success(handleWords);
        }
      }
    }

    function allWords( done ) {
      done(words);
    }

    function unusedWords( done ) {
      done(words.filter(onlyUnused));
    }

    function getWord( done ) {
      var unused = words.filter(onlyUnused);

      if (!unused.length) {
        // No more words! Reset for now!
        usedWords = {};
      }
      var word = unused[Math.floor(Math.random() * unused.length)];

      if (word) {
        // Store our word data for later
        var roundWord = {
          'name': word,
          'time': 999
        };

        roundWords.push(roundWord);

        // If we aren't on the first word,
        // then set the time the last word took
        if (roundWords[wordCount - 1]) {
          roundWords[wordCount - 1].time = timeDifference();
        }

        usedWords[word] = 1;
        done(word);

        // Add to used words object
        sessionStorage.setItem('usedWords', JSON.stringify(usedWords));
        // Add to game words array. This will be for our game data.
        localStorageService.add('roundWords', roundWords);
      } else {
        // No more words! Reset for now!
      }

      // Iterate our word count
      wordCount++;
    }

    return {
      all: ensureFetched(allWords),
      unused: ensureFetched(unusedWords),
      get: ensureFetched(getWord),
      resetWords: resetRoundWords
    };
  });
