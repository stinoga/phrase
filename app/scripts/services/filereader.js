'use strict';

angular.module('PhoneGap').factory('FileReader', [
  '$window',
  'PhoneGap',
  function ($window, PhoneGap) {

    return {
      onDeviceReady: function () {
        PhoneGap.ready().then(function () {
          // console.log('Device ready callback');
          $window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);

          function gotFS (fileSystem) {
            // console.log(fileSystem);
            fileSystem.root.getFile('../data/words.json', null, gotFileEntry, fail);
          }

          function gotFileEntry (fileEntry) {
            fileEntry.file(gotFile, fail);
          }

          function gotFile (file){
            readDataUrl(file);
            readAsText(file);
          }

          function readDataUrl (file) {
            var reader = new FileReader();
            reader.onloadend = function(evt) {
              // console.log('Read as data URL');
              // console.log(evt.target.result);
            };
            reader.readAsDataURL(file);
          }

          function readAsText (file) {
            var reader = new FileReader();
            reader.onloadend = function(evt) {
              // console.log('Read as text');
              // console.log(evt.target.result);
            };
            reader.readAsText(file);
          }

          function fail (error) {
            // console.log('Houston, we have a problem.');
            // console.log(error);
          }
        });
      }
    };

  }
]);
