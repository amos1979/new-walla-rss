'use strict';

/**
 * @ngdoc directive
 * @name wallaRssApp.directive:main
 * @description
 * # main
 */
angular.module('wallaRssApp')
  .directive('main', function () {
    return {
      templateUrl: 'scripts/directives/main.tpl.html',
      restrict: 'E'
    };
  });
