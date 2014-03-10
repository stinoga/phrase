'use strict';

angular.module('phraseApp')
  .factory('words', function ( $http, $q, settings, $filter ) {
    var words = [],
        usedWords = JSON.parse(sessionStorage.getItem('usedWords') || 'null') || {},
        apiPath = 'data/';

    // Grab the selected category, and setup a slug for the name
    function wordListSetting() {
      return $filter('slugFilter')(settings.get('Category').name);
    }

    // TODO: this can probably have the function attached directly to the variable
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
              apiArray.push($http.get(apiPath + $filter('slugFilter')(key.name)));
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
        usedWords[word] = 1;
        done(word);
        sessionStorage.setItem('usedWords', JSON.stringify(usedWords));
      } else {
        // No more words! Reset for now!
      }
    }

    return {
      all: ensureFetched(allWords),
      unused: ensureFetched(unusedWords),
      get: ensureFetched(getWord)
    };
  });
