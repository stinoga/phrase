'use strict';

angular.module('phraseApp')
  .controller('FullversionCtrl', function ($rootScope, $scope, page) {
    $rootScope.pageName = page.get();
  });
