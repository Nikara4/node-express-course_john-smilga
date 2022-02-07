// Modules - encapsulating code (only share minimum)

const names = require("./4-names");
const sayHi = require("./5-utils");
const uncleBoby = require("./6-alt-flav");
require("./7-mind-grenade");

console.log(uncleBoby.singlePerson);
sayHi("Ola");
sayHi(names.Peter);
console.log(names);
