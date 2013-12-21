'use strict';

angular.module('phraseApp')
  .factory('words', function ( $http, settings ) {
    var words = [],
        usedWords = JSON.parse(sessionStorage.getItem('usedWords') || 'null') || {},
        wordListId = wordListSetting(),
        apiPath = 'http://www.pop-phrase.com/api/words/';

    function wordListSetting() {
      return settings.get('Category').toLowerCase().replace(/[^a-z_]/g, '_');
    }

    function onlyUnused( word ) {
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
        // TODO: Let's just reset the list here
        alert('You\'ve used all the words! Please choose another category.');
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


    // device APIs are available
    //
    // function onDeviceReady() {
    //     window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
    //     console.log('Device ready callback');
    // }

    // function gotFS(fileSystem) {
    //     fileSystem.root.getFile('readme.txt', null, gotFileEntry, fail);
    // }

    // function gotFileEntry(fileEntry) {
    //     fileEntry.file(gotFile, fail);
    // }

    // function gotFile(file){
    //     readDataUrl(file);
    //     readAsText(file);
    // }

    // function readDataUrl(file) {
    //     var reader = new FileReader();
    //     reader.onloadend = function(evt) {
    //         console.log('Read as data URL');
    //         console.log(evt.target.result);
    //     };
    //     reader.readAsDataURL(file);
    // }

    // function readAsText(file) {
    //     var reader = new FileReader();
    //     reader.onloadend = function(evt) {
    //         console.log('Read as text');
    //         console.log(evt.target.result);
    //     };
    //     reader.readAsText(file);
    // }

    // function fail(error) {
    //     console.log(error.code);
    // }


    return {
      all: ensureFetched(allWords),
      unused: ensureFetched(unusedWords),
      get: ensureFetched(getWord)
    };
  });
