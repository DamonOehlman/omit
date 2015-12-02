var omit = require('..');
var someObject = {id: 101, color: 'blue'};

console.log(omit(['id'], someObject));