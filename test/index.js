var gettersToProps = require('..');
var assert = require('assert');

var obj = {
  getThing: function () {
    return 1;
  },
  setThing: function () {},
  getMore: function () {
    return { another: 'yep' };
  },
  notMe: 'nope',
  getFailure: function () {
    throw new Error("oops");
  }
};

props = gettersToProps(obj);

assert.deepEqual(props, {
  thing: 1,
  more: { another: 'yep' },
  failure: undefined
});

props = gettersToProps(obj, {
  others: true
});

assert.deepEqual(props, {
  thing: 1,
  more: { another: 'yep' },
  failure: undefined,
  notMe: 'nope'
});
