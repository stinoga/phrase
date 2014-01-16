'use strict';

angular.module('phraseApp')
  .directive('phLogo', function () {
    // TODO: Read on dependency injection in directives
    // How do we tie these to certain controllers?
    // Why is scope injected without the $ sign?
    // var logoState = function ( scope, element ) {
    //   // body...
    // };

    return {
      template: '<h1><a href="#/">{{logoText}}</a></h1>',
      restrict: 'E'
    };

  });
