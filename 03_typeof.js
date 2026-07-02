// - typeof always returns a String.
// - typeof <value> or typeof(<value>).



// ------------------------------------------------------------------------------------------------



console.log(typeof "Hello"); // "string"
console.log(typeof String); // "function"
console.log(typeof String()); // "string"
console.log(typeof String("Hello")); // "string"

console.log(typeof 123); // "number"
console.log(typeof Number); // "function"
console.log(typeof Number()); // "number"
console.log(typeof Number(123)); // "number"

console.log(typeof true); // "boolean"
console.log(typeof Boolean); // "function"
console.log(typeof Boolean()); // "boolean"
console.log(typeof Boolean(true)); // "boolean"

console.log(typeof null); // "object" (historical bug in JavaScript)

console.log(typeof undefined); // "undefined"

console.log(typeof Symbol); // "function"
console.log(typeof Symbol()); // "symbol"
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof Symbol(123)); // "symbol"

console.log(typeof BigInt); // "function"
console.log(typeof BigInt()); // TypeError - Cannot convert undefined to BigInt
console.log(typeof BigInt("123")); // "bigint"
console.log(typeof BigInt(123)); // "bigint"

console.log(typeof { name: "Hitarth", age: 24, single: true }); // "object"
console.log(typeof Object); // "function"
console.log(typeof Object()); // "object"
console.log(typeof Object({ name: "Hitarth", age: 24, single: true })); // "object"

console.log(typeof [1, 2, 3]); // "object"
console.log(typeof Array); // "function"
console.log(typeof Array()); // "object"
console.log(typeof Array(1, 2, 3)); // "object"

console.log(typeof function () { }); // "function" (special case - bacause they are callable objects)
console.log(typeof Function); // "function"
console.log(typeof Function()); // "function"
console.log(typeof Function(() => { })); // "function"

console.log(typeof Date); // "function"
console.log(typeof Date()); // "string"
console.log(typeof new Date()); // "object"

console.log(typeof RegExp); // "function"
console.log(typeof RegExp()); // "object"

console.log(typeof Map); // "function"
console.log(typeof Map()); // TypeError - Constructor Map requires 'new'
console.log(typeof new Map()); // "object"

console.log(typeof Set); // "function"
console.log(typeof Set()); // TypeError - Constructor Set requires 'new'
console.log(typeof new Set()); // "object"

console.log(typeof Error); // "function"
console.log(typeof Error()); // "object"

console.log(typeof Math); // "object"

console.log(typeof JSON); // "object"

console.log(typeof Promise); // "function"
console.log(typeof Promise()); // TypeError - Constructor Promise cannot be invoked without 'new'
console.log(typeof new Promise()); // TypeError - Promise Resolver undefined is not a Function
console.log(typeof new Promise(() => { })); // "object"



// ------------------------------------------------------------------------------------------------



console.log(typeof NaN); // "number" (used to represent invalid numbers)
console.log(typeof Infinity); // "number" (numerical value that is larger than the finite number, i.e., infinity)
console.log(typeof (typeof (abc))); // "string" (typeof is a keyword that returns a string)