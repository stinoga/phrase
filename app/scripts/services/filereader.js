'use strict';

angular.module('PhoneGap')
  .factory('FileReader', [
    '$window',
    'PhoneGap',
    function ($window, PhoneGap) {

      PhoneGap.ready().then(function () {
        console.log('FILE READER');
      });

      return {
        function onDeviceReady() {
          PhoneGap.ready().then(function () {
            $window.navigator.compass.getCurrentHeading(onSuccess, onError, options);
          });
          $window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
          console.log('Device ready callback');
        }

        function gotFS(fileSystem) {
          fileSystem.root.getFile('readme.txt', null, gotFileEntry, fail);
        }

        function gotFileEntry(fileEntry) {
          fileEntry.file(gotFile, fail);
        }

        function gotFile(file){
          readDataUrl(file);
          readAsText(file);
        }

        function readDataUrl(file) {
          var reader = new FileReader();
          reader.onloadend = function(evt) {
            console.log('Read as data URL');
            console.log(evt.target.result);
          };
          reader.readAsDataURL(file);
        }

        function readAsText(file) {
          var reader = new FileReader();
          reader.onloadend = function(evt) {
            console.log('Read as text');
            console.log(evt.target.result);
          };
          reader.readAsText(file);
        }

        function fail(error) {
          console.log(error.code);
        }
      };

    }
  ]);
