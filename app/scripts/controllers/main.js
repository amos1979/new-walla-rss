'use strict';

/**
 * @ngdoc function
 * @name wallaRssApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wallaRssApp
 */
angular.module('wallaRssApp')
  .controller('MainCtrl', function ($scope, $location, rssStore) {
    var $ctrl = this;
    
    $ctrl.items = rssStore.getList();
    $ctrl.newUrl = '';
    $ctrl.active = null;
    
    $scope.$on('$routeChangeSuccess', function (e, current) {
      $ctrl.active = parseInt(current.params.id, 10);
    });
  
    $ctrl.add = function() {
      var index = rssStore.add($ctrl.newUrl);
      
      $location.path('/' + index);
    };
  
    $ctrl.delete = function (item) {
      rssStore.delete(item);
      
      if ($ctrl.active === item.id) {
        $location.path('/');
      }
    };
  });
