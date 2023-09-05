const people = ['Loyd', 'Luiz', 'John', 'Isaac'];
const age = [21, 23, 35, 27];

console.log(people);


// This is an object that holds the exported values and functions from that module.
// Essential to ensure reusage of modules
module.exports = {
    people, age
};