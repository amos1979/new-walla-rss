'use strict';

/**
 * @ngdoc service
 * @name wallaRssApp.rssStore
 * @description
 * # rssStore
 * Service in the wallaRssApp.
 */
angular.module('wallaRssApp')
  .service('rssStore', function ($http) {
    var _id, items;
    
    this.getList = function() {
      items = items || JSON.parse(localStorage.getItem('RSS')) || [];
      
      if (!_id) {
        _id = 0;
        
        var ids = items.map(function (item) {
          return item.id;
        });
        
        if (ids.length > 0) {
          _id = Math.max.apply(Math, ids) + 1;
        }
      }
      
      return items;
    };
    
    this.getItem = function (id) {
      if (typeof(id) !== 'number') id = parseInt(id, 10);
      
      return this.getList()
        .filter(function (item) {
          return item.id === id;
        })[0];
    };
    
    this.saveList = function() {
      localStorage.setItem('RSS', JSON.stringify(items));
    };
    
    this.add = function (url) {
      items.unshift({
        url: url,
        id: ++_id
      });
      
      this.saveList();
      
      return _id;
    };
    
    this.delete = function (item) {
      var index = items.indexOf(item);
      
      if (index >= 0) {
        items.splice(index, 1);
      }
      
      this.saveList();
    };
    
    this.fetchUrl = function (id) {
      var item = this.getItem(id);
      
      return $http.jsonp('http://ajax.googleapis.com/ajax/services/feed/load', {
        params: {
          v: '1.0',
          num: '50',
          callback: 'JSON_CALLBACK',
          q: item.url
        }
      });
    };
  });
