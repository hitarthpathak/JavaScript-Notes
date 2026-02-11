let name = "Hitarth";
let new_name = new String("New Hitarth");

console.log(typeof name) // string
console.log(typeof new_name) // object

// 1. Variable name has all the string methods (despite being type - string) like the variable new_name (which is type - string object) because of a process called Autoboxing.
// 2. Autoboxing is the process where JavaScript temporarily wraps a Primitive value in an Object so you can access Properties or Methods that belong to its corresponding object type.



// ------------------------------------------------------------------------------------------------



// STRING PROPERTIES & METHODS :- (All string methods return a new string. They don't modify the original string.)

// Common :

// .length - [property] - returns the length of a string
console.log(name.length); // 7

// .concat() - [method] - joins two or more strings
console.log(name + new_name); // HitarthNew Hitarth
console.log(name + " " + new_name); // Hitarth New Hitarth
console.log("Hello " + name); // Hello Hitarth

// .repeat() - [ method] - repeat the string with a specific number of copies
console.log(name.repeat(3)); // HitarthHitarthHitarth

// .split() - [method] - convert string to array
console.log(name.split()); // [ 'Hitarth' ]
console.log(name.split("")); // [ 'H', 'i', 't', 'a', 'r', 't', 'h' ]
console.log("The quick brown fox jumps over the lazy dog.".split(" ")); // [ 'The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.' ]
console.log(name.split("a")); // [ 'Hit', 'rth' ]

// .reverse() - [method] - reverse the string - string don't have .reverse() method, convert them in array first
console.log(name.split("").reverse().join("")); // htratiH

// .includes() - [method] - return a boolean value of the specified value if found in the string
console.log(name.includes("H")); // true
console.log(name.includes("P")); // false

// .search() - [method] - return the index of the specified value if found in the string
console.log(name.search("a")); // 3
console.log(name.search("z")); // -1 (if not found)

// ----------------------------------------------

// Converting String To Upper & Lower Case :

// .toUpperCase() - [method] - convert string to upper case
console.log(name.toUpperCase()); // HITARTH

// .toLowerCase() - [method] - convert string to lower case
console.log(name.toLowerCase()); // hitarth

// ----------------------------------------------

// String Starting & Ending :-

// .startsWith() - [method] - return a boolean value of the specified value is found at the beginning of the string
console.log(name.startsWith("H")); // true
console.log(name.startsWith("h")); // false

// .endsWith() - [method] - return a boolean value of the specified value is found at the end of the string
console.log(name.endsWith("h")); // true
console.log(name.endsWith("H")); // false

// ----------------------------------------------

// String Trim :

// .trim() - [method] - removes whitespace from both sides of a string
let white_space = "   Hello World   ";
console.log(white_space.trim()); // "Hello World"

// .trimStart() - [method] - removes whitespace from the beginning of a string
console.log(white_space.trimStart()); // "Hello World   "

// .trimEnd() - [method] - removes whitespace from the end of a string
console.log(white_space.trimEnd()); // "   Hello World"

// ----------------------------------------------

// String Indexing :

// .indexOf() - [method] - returns the index of a specified value in a string (only the first match)
console.log(name.indexOf("a")); // 3
console.log(name.indexOf("H")); // 0
console.log(name.indexOf("z")); // -1 (if not found)

// .lastIndexOf() - [method] - returns the index of a specified value in a string (only the last match)
console.log(name.lastIndexOf("a")); // 3
console.log("hitarth".lastIndexOf("h")); // 6
console.log(name.lastIndexOf("z")); // -1 (if not found)

// ----------------------------------------------

// String Padding :

// .padStart() - [method] - pads a string with another string (multiple times) until the resulting string reaches the given length
console.log(name.padStart(10, "*")); // ***Hitarth

// .padEnd() - [method] - pads a string with another string (multiple times) until the resulting string reaches the given length
console.log(name.padEnd(10, "*")); // Hitarth***

// - Both methods are for strings, to apply them on numbers first convert them in string (.toString()).

// ----------------------------------------------

// String Replace :

// .replace() - [method] - replace a specified value with another value in a string (only the first match)
console.log(name.replace("Hitarth", "New Hitarth")); // New Hitarth

// .replaceAll() - [method] - replace all occurrences of a specified value with another value in a string
console.log("Like YouTube!, Comment YouTube!, Subscribe YouTube!".replaceAll("YouTube", "PornHub")); // Like PornHub!, Comment PornHub!, Subscribe PornHub!

// ----------------------------------------------

// Extracting String Characters :

// .at() - [method] - allows negative indexes
console.log(name.at(3)); // a

// .charAt() - [method] - does not allow negative values
console.log(name.charAt(3)); // a

// .charCodeAt() - [method] - returns UTF-16 code units (an integer between 0 and 65535)
console.log(name.charCodeAt(3)); // 97

// .codePointAt() - [method] - returns full Unicde code units (an integer between 0 and 11,14,111)
console.log(name.codePointAt(3)); // 97

// Bracket Notation [] - [neither method, nor property] - treats string as array and returns value based on index
console.log(name[3]); // a

// ----------------------------------------------

// Extracting String Parts (end not included) :

// .slice() - [method]
console.log(name.slice(0, 3)); // Hit
console.log(name.slice(3)); // arth

// .substring() - [method]
console.log(name.substring(0, 4)); // Hita
console.log(name.substring(4)); // rth

// .substr() - [method] - deprecated
console.log(name.substr(0, 5)); // Hitar
console.log(name.substr(5)); // th