define(function(require) {
  var registerSuite = require('intern!object');
  var expect = require('intern/chai!expect');
  var View = require('app/components/search/View');

  var view;

  registerSuite({
    name: 'components: Search',
    setup: function() {
      // set up test here
    },
    beforeEach: function() {
      // run before
    },
    afterEach: function() {
      // run after
    },
    teardown: function() {
      // destroy widget
    },
    'Component is valid': function() {
      expect(View).to.not.be.undefined;
    }
  });
});
