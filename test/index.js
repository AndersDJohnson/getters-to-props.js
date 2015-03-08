var gettersToProps = require('..');
var assert = require('assert');

var props;

props = gettersToProps({
  getThing: function () {
    return 1;
  },
  setThing: function () {}
});

console.log(props);

assert.deepEqual(props, {
  thing: 1
});
