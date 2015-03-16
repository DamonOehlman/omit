var books = require('../test/sampledata/tolkien.json');
var omit = require('..');
var REJECTED_KEYS = ['authors', 'created', 'last_modified'];

// log an array of the entries with the authors and created keys omitted
console.log(books.entries.map(omit(REJECTED_KEYS)));
