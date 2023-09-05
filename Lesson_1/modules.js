// Import people from people.js
const { people, age } = require('./people');

console.log(people, age);



// More modules built in. This here checks the OS in Use

const os = require('os');

console.log(os.platform(), os.homedir())