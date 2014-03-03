'use strict';

angular.module('phraseApp')
  .controller('AboutCtrl', function ($rootScope, page) {
    $rootScope.pageName = page.get();
  });
