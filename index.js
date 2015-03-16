/**
  # omit

  Remove values from an object (or an array of objects) based on key, value or
  an evaluator function.

  ## Example Usage

  <<< examples/object.js

**/
module.exports = function(input, entries) {
  var notArray = !Array.isArray(input);
  var output = [];
  var itemIdx;
  var entryIdx;
  var key;
  var reject;
  var value;
  var entry;
  var entryCount;
  var testObject;
  var newObject;

  // if the input is not an object, then simply passthrough
  if (typeof input != 'object' || (input instanceof String)) {
    return input;
  }

  // if the data is not an array, then wrap in an array for consistent treatment
  if (notArray) {
    input = [input];
  }

  // ensure entries is an array
  entries = [].concat(entries || [])
    .concat(Array.prototype.slice.call(arguments, 2));

  // initialise the entry count
  entryCount = entries.length;

  // iterate through the elements in the data and
  for (itemIdx = input.length; itemIdx--; ) {
    // initialise the test object and new object
    testObject = input[itemIdx];
    newObject = output[itemIdx] = {};

    // iterate through the keys in the object
    for (key in testObject) {
      if (testObject.hasOwnProperty(key)) {
        value = testObject[key];
        reject = false;

        // iterate through the entry tests
        for (entryIdx = 0; (! reject) && entryIdx < entryCount; entryIdx++) {
          entry = entries[entryIdx];

          // if the entry is a string, then omit only if we have a key match
          switch (typeof entry) {
          case 'function':
            reject = entry(key, value, testObject);

            // check for value updates
            if (typeof reject == 'object' &&
              typeof reject.newValue != 'undefined') {
              value = reject.newValue;
              reject = false;
            }

            // ensure reject is a boolean value
            reject = reject === true;

            break;

          case 'string':
            reject = key === entry;
            break;
          }
        }

        // if we are not rejecting the key, then add the value to the new object
        if (! reject) {
          newObject[key] = value;
        }
      }
    }
  }

  return notArray ? output[0] : output;
};
