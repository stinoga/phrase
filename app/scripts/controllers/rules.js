'use strict';

angular.module('phraseApp')
  .controller('RulesCtrl', function ($rootScope, page) {
    $rootScope.pageName = page.get();
  });
