'use strict';

angular.module('phraseApp')
  .controller('AboutCtrl', function ($rootScope, $scope, page, geturl) {
    $rootScope.pageName = page.get();

    $scope.openUrl = function(url) {
      geturl.get(url);
    };
  });
