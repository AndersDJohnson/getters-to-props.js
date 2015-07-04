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

```js
var gettersToProps = require('getters-to-props');

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

// props is now:
{
  thing: 1,
  more: { another: 'yep' },
  failure: undefined
}

// or options, e.g. "others"

props = gettersToProps(obj, {
  others: true
});

// props is now:
{
  thing: 1,
  more: { another: 'yep' },
  failure: undefined,
  notMe: 'nope'
}

```
