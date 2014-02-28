'use strict';

angular.module('phraseApp')
  .controller('RulesCtrl', function ($rootScope, $scope, page) {
    $rootScope.pageName = page.get();
  });
