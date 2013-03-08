var assert = require('assert'),
    omit = require('../'),
    sample = require('./sampledata/tolkien.json');

function zeroCreated(key, value, obj) {
    if (key === 'created') {
        return { newValue: 0 };
    }
}

function zeroLastModified(key, value, object) {
    if (key === 'last_modified') {
        return { newValue: 0 };
    }
}

describe('evaluator based value remapping', function() {
    describe('array data', function() {
        it('should be able to update details based on key name', function() {
            var entries = omit(sample.entries, zeroCreated);

            // iterate through the entries, and validate that no created by values slipped through
            entries.forEach(function(entry) {
                assert.equal(entry.created, 0, 'created value was not updated');
            });
        });

        it('should be able to zero two keys', function() {
            var entries = omit(sample.entries, [zeroCreated, zeroLastModified]);

            // iterate through the entries, and validate that no created by values slipped through
            entries.forEach(function(entry) {
                assert.equal(entry.created, 0, 'created value not updated');
                assert.equal(entry.last_modified, 0, 'last_modified not updated');
            });
        });

        it('should be able to zero two keys (varargs variant)', function() {
            var entries = omit(sample.entries, zeroCreated, zeroLastModified);

            // iterate through the entries, and validate that no created by values slipped through
            entries.forEach(function(entry) {
                assert.equal(entry.created, 0, 'created value not updated');
                assert.equal(entry.last_modified, 0, 'last_modified not updated');
            });
        });
    });

    /*
    describe('standalone object', function() {
        it('should be able to remove details based on key name', function() {
            var entry = omit(sample.entries[0], removeCreated);

            // iterate through the entries, and validate that no created by values slipped through
            assert(! entry.created, 'Entry has created information');
        });

        it('should be able to remove two keys', function() {
            var entry = omit(sample.entries[0], [removeCreated, removeLastModified]);

            // iterate through the entries, and validate that no created by values slipped through
            assert(! entry.created, 'Entry has created information');
            assert(! entry.last_modified, 'Entry has last_modified information');
        });

        it('should be able to remove two keys (varargs variant)', function() {
            var entry = omit(sample.entries[0], removeCreated, removeLastModified);

            // iterate through the entries, and validate that no created by values slipped through
            assert(! entry.created, 'Entry has created information');
            assert(! entry.last_modified, 'Entry has last_modified information');
        });
    });
*/
});