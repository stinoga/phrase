'use strict';

angular.module('phraseApp')
  .controller('SkinCtrl', function ($rootScope, $filter, settings) {
    $rootScope.skin = $filter('slugFilter')(settings.get('Skin').name, '_');
  });
