'use strict';

/**
 * @ngdoc overview
 * @name wallaRssApp
 * @description
 * # wallaRssApp
 *
 * Main module of the application.
 */
angular
  .module('wallaRssApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/empty.html'
      })
      .when('/:id', {
        templateUrl: 'views/feed.html',
        controller: 'FeedCtrl',
        controllerAs: '$ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
