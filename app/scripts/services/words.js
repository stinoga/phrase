'use strict';

angular.module('phraseApp')
  .factory('words', function ( $http, settings ) {
    var words = [],
        usedWords = JSON.parse(sessionStorage.getItem('usedWords') || 'null') || {},
        // TODO: set global config for API path
        apiPath = (settings.get('Category').live === true) ? 'http://www.pop-phrase.com/api/words/' : 'data/';

    // Grab the selected category, and setup a slug for the name
    function wordListSetting() {
      return settings.get('Category').name.toLowerCase().replace(/[^a-z_]/g, '_');
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
      function handleWords( data, status ) {
        // if (!status.)
        console.log('status', status);
        setWords(data);
        done();
      }

      console.log('Fetching words...');
      $http.get(apiPath + wordListId).success(handleWords);
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
        console.log('Word undefined! Why?');
      }
    }

    return {
      all: ensureFetched(allWords),
      unused: ensureFetched(unusedWords),
      get: ensureFetched(getWord)
    };
  });
