// - typeof always returns a String.
// - typeof <value> or typeof(<value>).



// ------------------------------------------------------------------------------------------------



console.log(typeof "Hello"); // "string"
console.log(typeof 123); // "number"
console.log(typeof true); // "boolean"
console.log(typeof null); // "object" (historical bug in JavaScript)
console.log(typeof undefined); // "undefined"
console.log(typeof Symbol()); // "symbol"
console.log(typeof BigInt(123)); // "bigint"
console.log(typeof { name: "Hitarth", age: 24, single: true }); // "object"
console.log(typeof [1, 2, 3]); // "object"
console.log(typeof function () { }); // "function" (special case - bacause they are callable objects)



// ------------------------------------------------------------------------------------------------



console.log(typeof NaN); // "number" (used to represent invalid numbers)
console.log(typeof Infinity); // "number" (numerical value that is larger than the finite number, i.e., infinity)
console.log(typeof (typeof (abc))); // "string" (typeof is a keyword that returns a string)