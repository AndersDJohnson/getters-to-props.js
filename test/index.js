var gettersToProps = require('..');
var assert = require('assert');

var props;

props = gettersToProps({
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
});

console.log(props);

assert.deepEqual(props, {
  thing: 1,
  more: { another: 'yep' },
  failure: undefined
});
