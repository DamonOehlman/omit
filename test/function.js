var assert = require('assert'),
    omit = require('../'),
    sample = require('./sampledata/tolkien.json');

function removeCreated(key, value, obj) {
    return key === 'created';
}

function removeLastModified(key, value, object) {
    return key === 'last_modified';
}

describe('evaluator based ommission', function() {
    describe('array data', function() {
        it('should be able to remove details based on key name', function() {
            var entries = omit(removeCreated, sample.entries);

            // iterate through the entries, and validate that no created by values slipped through
            entries.forEach(function(entry) {
                assert(! entry.created, 'Entry has created information');
            });
        });
    });

    describe('standalone object', function() {
        it('should be able to remove details based on key name', function() {
            var entry = omit(removeCreated, sample.entries[0]);

            // iterate through the entries, and validate that no created by values slipped through
            assert(! entry.created, 'Entry has created information');
        });
    });
});
