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
            var entries = omit(sample.entries, removeCreated);

            // iterate through the entries, and validate that no created by values slipped through
            entries.forEach(function(entry) {
                assert(! entry.created, 'Entry has created information');
            });
        });

        it('should be able to remove two keys', function() {
            var entries = omit(sample.entries, [removeCreated, removeLastModified]);

            // iterate through the entries, and validate that no created by values slipped through
            entries.forEach(function(entry) {
                assert(! entry.created, 'Entry has created information');
                assert(! entry.last_modified, 'Entry has last_modified information');
            });
        });

        it('should be able to remove two keys (varargs variant)', function() {
            var entries = omit(sample.entries, removeCreated, removeLastModified);

            // iterate through the entries, and validate that no created by values slipped through
            entries.forEach(function(entry) {
                assert(! entry.created, 'Entry has created information');
                assert(! entry.last_modified, 'Entry has last_modified information');
            });
        });
    });

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
});