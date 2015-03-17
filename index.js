/**
  # omit

  Remove values from an object (or an array of objects) based on key, value or
  an evaluator function.

  ## Example Usage

  <<< examples/object.js

**/
module.exports = function(rule) {

  function omit(target) {
    var acceptVal;
    var copy = {};
    var key;
    var val;

    // in the case that we have been passed a falsey value, just return that
    if (! target) {
      return target;
    }

    if (Array.isArray(target)) {
      return target.map(omit);
    }

    for (var key in target) {
      if (target.hasOwnProperty(key)) {
        // if we don't have a valid rule, just accept the value
        acceptVal = typeof rule != 'function';

        // if we only have a key check, then do a very simple test
        if (rule.length === 1) {
          acceptVal = !rule(key);
        }
        else {
          val = target[key];
          acceptVal = !rule(key, val = target[key], target);
        }

        if (acceptVal) {
          copy[key] = val || target[key];
        }
      }
    }

    return copy;
  }

  function omitWhenEqual(value) {
    return function(key) {
      return key === value;
    };
  }

  function omitWhenIn(target) {
    return function(key) {
      return target.indexOf(key) >= 0;
    };
  }

  if (typeof rule == 'string' || (rule instanceof String)) {
    rule = omitWhenEqual(rule);
  }

  if (Array.isArray(rule)) {
    rule = omitWhenIn(rule);
  }

  return arguments[1] !== undefined ? omit(arguments[1]) : omit;
};
