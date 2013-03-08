var assert = require('assert'),
    omit = require('../'),
    sample = require('./sampledata/tolkien.json');

describe('simple key based ommission', function() {
    it('should be able to remove details based on key name', function() {
        var entries = omit(sample.entries, 'created');

        // iterate through the entries, and validate that no created by values slipped through
        entries.forEach(function(entry) {
            assert(! entry.created, 'Entry has created information');
        });
    });
});