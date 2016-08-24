'use strict';

/**
 * @ngdoc function
 * @name wallaRssApp.controller:FeedCtrl
 * @description
 * # FeedCtrl
 * Controller of the wallaRssApp
 */
angular.module('wallaRssApp')
  .controller('FeedCtrl', function (rssStore, $routeParams) {
    var $ctrl = this;
    
    $ctrl.entries = [];
    $ctrl.item = rssStore.getItem($routeParams.id);
    
    rssStore
      .fetchUrl($routeParams.id)
      .then(function (results) {
        $ctrl.entries = results.data.responseData.feed.entries;
      });
  });
