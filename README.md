# omit

Remove values from an object (or an array of objects) based on key, value or
an evaluator function.


[![NPM](https://nodei.co/npm/omit.png)](https://nodei.co/npm/omit/)

[![Build Status](https://img.shields.io/travis/DamonOehlman/omit.svg?branch=master)](https://travis-ci.org/DamonOehlman/omit) 

## Example Usage

```js
var books = require('omit/test/sampledata/tolkien.json');
var omit = require('omit');
var REJECTED_KEYS = ['authors', 'created', 'last_modified'];

// log an array of the entries with the authors and created keys omitted
console.log(books.entries.map(omit(REJECTED_KEYS)));

```

## License(s)

### MIT

Copyright (c) 2015 Damon Oehlman <damon.oehlman@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
