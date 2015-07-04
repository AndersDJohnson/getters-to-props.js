(function (root, factory) {
  var name = 'gettersToProps';
  if (typeof define === 'function' && define.amd) {
    define([], function () {
        return (root[name] = factory());
    });
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root[name] = factory();
  }
}(this, function () {

  var isFunction = function (obj) {
    // console.log('obj:', obj);
    var str = Object.prototype.toString.call(obj);
    // console.log('str:', str);
    return str === '[object Function]';
  };

  var firstToLower = function (str) {
    if (str.length === 0) return str;
    return str[0].toLowerCase() + str.slice(1);
  };

  var parseFunctionName = function (name) {
    return name.match(/get(.+)/);
  };

  var gettersToProps = function (obj, opts) {
    opts = opts || {};
    // console.log('obj:', obj);
    if (! obj) {
      return;
    }
    var props = {};
    var key;
    for (key in obj) {
      var val = obj[key];
      if (isFunction(val)) {
        var parsed = parseFunctionName(key);
        // console.log(parsed);
        if (parsed) {
          var prop = parsed[1];
          prop = firstToLower(prop);
          try {
            props[prop] = val();
          }
          catch (e) {
            // undefined indicates error calling getter with no arguments
            props[prop] = undefined;
          }
        }
      }
      else {
        // console.log('Not a function: ' + key);
        if (opts.others) {
          props[key] = val;
        }
      }
    }
    return props;
  };

  return gettersToProps;
}));
