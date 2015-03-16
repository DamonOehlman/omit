var assert = require('assert'),
    omit = require('../'),
    sample = require('./sampledata/tolkien.json');

describe('simple key based ommission', function() {
    describe('array data', function() {
        it('should be able to remove details based on key name', function() {
            var entries = omit('created', sample.entries);

            // iterate through the entries, and validate that no created by values slipped through
            entries.forEach(function(entry) {
                assert(! entry.created, 'Entry has created information');
            });
        });

        it('should be able to remove two keys', function() {
            var entries = omit(['created', 'last_modified'], sample.entries);

            // iterate through the entries, and validate that no created by values slipped through
            entries.forEach(function(entry) {
                assert(! entry.created, 'Entry has created information');
                assert(! entry.last_modified, 'Entry has last_modified information');
            });
        });
    });

    describe('standalone object', function() {
        it('should be able to remove details based on key name', function() {
            var entry = omit('created', sample.entries[0]);

            // iterate through the entries, and validate that no created by values slipped through
            assert(! entry.created, 'Entry has created information');
        });

        it('should be able to remove two keys', function() {
            var entry = omit(['created', 'last_modified'], sample.entries[0]);

            // iterate through the entries, and validate that no created by values slipped through
            assert(! entry.created, 'Entry has created information');
            assert(! entry.last_modified, 'Entry has last_modified information');
        });
    });
});
