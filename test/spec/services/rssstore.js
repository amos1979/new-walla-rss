'use strict';

describe('Service: rssStore', function () {

  // load the service's module
  beforeEach(module('wallaRssApp'));

  // instantiate service
  var rssStore;
  beforeEach(inject(function (_rssStore_) {
    rssStore = _rssStore_;
  }));

  it('should do something', function () {
    expect(!!rssStore).toBe(true);
  });

});
