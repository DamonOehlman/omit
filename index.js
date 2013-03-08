function omit(input, entries) {
    var notArray = !Array.isArray(input),
        output = [],
        itemIdx,
        entryIdx,
        key,
        reject,
        value,
        entry,
        testObject,
        newObject;

    // if the data is not an array, then wrap in an array for consistent treatment
    if (notArray) {
        input = [input];
    }

    // ensure entries is an array
    entries = [].concat(entries || []);

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
                for (entryIdx = entries.length; (! reject) && entryIdx--; ) {
                    entry = entries[entryIdx];

                    // if the entry is a string, then omit only if we have a key match
                    switch (typeof entry) {
                        case 'function':
                            reject = entry(key, value, testObject);
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
}

module.exports = omit;