'use strict';

angular.module('phraseApp')
  .controller('RulesCtrl', function ($scope, $rootScope, $routeParams, page) {
    $scope.page = parseInt($routeParams.page, 10);
    $rootScope.pageName = 'rules' + $scope.page;
  });
