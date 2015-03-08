# getters-to-props.js

Get simple properties from object of getters.

## Install

Node
```
npm install --save getters-to-props
```

Bower (AMD, Global)
```
bower install --save getters-to-props
```

## Use

```
var gettersToProps = require('getters-to-props');

var props = gettersToProps({
  getThing: function () {
    return 1;
  },
  setThing: function () {},
  getMore: function () {
    return { another: 'yep' };
  },
  notMe: 'nope'
});

// props is now:
// {
//   thing: 1,
//   more: { another: 'yep' }
// }
```
