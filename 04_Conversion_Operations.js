console.log(Infinity + Infinity); // "Infinity"
console.log(Infinity + NaN); // "NaN"
console.log(Infinity + null); // "Infinity"
console.log(Infinity + undefined); // "NaN"

console.log(NaN + NaN); // "NaN"
console.log(NaN + Infinity); // "NaN"
console.log(NaN + null); // "NaN"
console.log(NaN + undefined); // "NaN"

console.log(null + null); // "0"
console.log(null + Infinity); // "Infinity"
console.log(null + NaN); // "NaN"
console.log(null + undefined); // "NaN"

console.log(undefined + undefined); // "NaN"
console.log(undefined + Infinity); // "NaN"
console.log(undefined + NaN); // "NaN"
console.log(undefined + null); // "NaN"



// ------------------------------------------------------------------------------------------------



console.log(+""); // "0"
console.log(+1); // "1"
console.log(+true); // "1"
console.log(+false); // "0"
console.log(+null); // "0"
console.log(+undefined); // "NaN"
console.log(+Symbol()); // TypeError - Cannot convert Symbol to Number
console.log(+BigInt(123)); // TypeError - Cannot convert BigInt to Number



// ------------------------------------------------------------------------------------------------



let empty_string = "";
let string = "Hello";
let one = 1;
let zero = 0;
let string_number = "123";
let string_number_alphabet = "123abc";
let positive_boolean = true;
let negative_boolean = false;
let null_value = null;
let undefined_value = undefined;
let symbol = Symbol();
let bigint = BigInt(123);



// ------------------------------------------------------------------------------------------------



// String Conversion :-

console.log(String(empty_string)); // ""
console.log(String(string)); // "Hello"
console.log(String(one)); // "1"
console.log(String(zero)); // "0"
console.log(String(string_number)); // "123"
console.log(String(string_number_alphabet)); // "123abc"
console.log(String(positive_boolean)); // "true"
console.log(String(negative_boolean)); // "false"
console.log(String(null_value)); // "null"
console.log(String(undefined_value)); // "undefined"
console.log(String(symbol)); // "Symbol()"
console.log(String(bigint)); // "123"



// ------------------------------------------------------------------------------------------------



// Number Conversion :-

console.log(Number(empty_string)); // "0"
console.log(Number(string)); // "NaN"
console.log(Number(one)); // "1"
console.log(Number(zero)); // "0"
console.log(Number(string_number)); // "123"
console.log(Number(string_number_alphabet)); // "NaN"
console.log(Number(positive_boolean)); // "1"
console.log(Number(negative_boolean)); // "0"
console.log(Number(null_value)); // "0"
console.log(Number(undefined_value)); // "NaN"
console.log(Number(symbol)); // TypeError - Cannot convert Symbol to Number
console.log(Number(bigint)); // "123"



// ------------------------------------------------------------------------------------------------



// Boolean Conversion :-

console.log(Boolean(empty_string)); // "false"
console.log(Boolean(string)); // "true"
console.log(Boolean(one)); // "true"
console.log(Boolean(zero)); // "false"
console.log(Boolean(string_number)); // "true"
console.log(Boolean(string_number_alphabet)); // "true"
console.log(Boolean(positive_boolean)); // "true"
console.log(Boolean(negative_boolean)); // "false"
console.log(Boolean(null_value)); // "false"
console.log(Boolean(undefined_value)); // "false"
console.log(Boolean(symbol)); // "true"
console.log(Boolean(bigint)); // "true"



// ------------------------------------------------------------------------------------------------



// Implicit Type Conversion :-

console.log(empty_string + empty_string); // ""
console.log(empty_string + string); // "Hello"
console.log(empty_string + one); // "1"
console.log(empty_string + zero); // "0"
console.log(empty_string + string_number); // "123"
console.log(empty_string + string_number_alphabet); // "123abc"
console.log(empty_string + positive_boolean); // "true"
console.log(empty_string + negative_boolean); // "false"
console.log(empty_string + null_value); // "null"
console.log(empty_string + undefined_value); // "undefined"
console.log(empty_string + symbol); // TypeError - Cannot convert Symbol to String
console.log(empty_string + bigint); // "123"

console.log(string + empty_string); // "Hello"
console.log(string + string); // "HelloHello"
console.log(string + one); // "Hello1"
console.log(string + zero); // "Hello0"
console.log(string + string_number); // "Hello123"
console.log(string + string_number_alphabet); // "Hello123abc"
console.log(string + positive_boolean); // "Hellotrue"
console.log(string + negative_boolean); // "Hellofalse"
console.log(string + null_value); // "Hellonull"
console.log(string + undefined_value); // "Helloundefined"
console.log(string + symbol); // TypeError - Cannot convert Symbol to String
console.log(string + bigint); // "Hello123"

console.log(one + empty_string); // "1"
console.log(one + string); // "1Hello"
console.log(one + one); // "2"
console.log(one + zero); // "1"
console.log(one + string_number); // "1123"
console.log(one + string_number_alphabet); // "1123abc"
console.log(one + positive_boolean); // "2"
console.log(one + negative_boolean); // "1"
console.log(one + null_value); // "1"
console.log(one + undefined_value); // "NaN"
console.log(one + symbol); // TypeError - Cannot convert Symbol to Number
console.log(one + bigint); // TypeError - Cannot mix BigInt and other types

console.log(zero + empty_string); // "0"
console.log(zero + string); // "0Hello"
console.log(zero + one); // "1"
console.log(zero + zero); // "0"
console.log(zero + string_number); // "0123"
console.log(zero + string_number_alphabet); // "0123abc"
console.log(zero + positive_boolean); // "1"
console.log(zero + negative_boolean); // "0"
console.log(zero + null_value); // "0"
console.log(zero + undefined_value); // "NaN"
console.log(zero + symbol); // TypeError - Cannot convert Symbol to Number
console.log(zero + bigint); // TypeError - Cannot mix BigInt and other types

console.log(string_number + empty_string); // "123"
console.log(string_number + string); // "123Hello"
console.log(string_number + one); // "1231"
console.log(string_number + zero); // "1230"
console.log(string_number + string_number); // "123123"
console.log(string_number + string_number_alphabet); // "123123abc"
console.log(string_number + positive_boolean); // "123true"
console.log(string_number + negative_boolean); // "123false"
console.log(string_number + null_value); // "123null"
console.log(string_number + undefined_value); // "123undefined"
console.log(string_number + symbol); // TypeError - Cannot convert Symbol to String
console.log(string_number + bigint); // "123123"

console.log(string_number_alphabet + empty_string); // "123abc"
console.log(string_number_alphabet + string); // "123abcHello"
console.log(string_number_alphabet + one); // "123abc1"
console.log(string_number_alphabet + zero); // "123abc0"
console.log(string_number_alphabet + string_number); // "123abc123"
console.log(string_number_alphabet + string_number_alphabet); // "123abc123abc"
console.log(string_number_alphabet + positive_boolean); // "123abctrue"
console.log(string_number_alphabet + negative_boolean); // "123abcfalse"
console.log(string_number_alphabet + null_value); // "123abcnull"
console.log(string_number_alphabet + undefined_value); // "123abcundefined"
console.log(string_number_alphabet + symbol); // TypeError - Cannot convert Symbol to String
console.log(string_number_alphabet + bigint); // "123abc123"

console.log(positive_boolean + empty_string); // "true"
console.log(positive_boolean + string); // "trueHello"
console.log(positive_boolean + one); // "2"
console.log(positive_boolean + zero); // "1"
console.log(positive_boolean + string_number); // "true123"
console.log(positive_boolean + string_number_alphabet); // "true123abc"
console.log(positive_boolean + positive_boolean); // "2"
console.log(positive_boolean + negative_boolean); // "1"
console.log(positive_boolean + null_value); // "1"
console.log(positive_boolean + undefined_value); // "NaN"
console.log(positive_boolean + symbol); // TypeError - Cannot convert Symbol to Number
console.log(positive_boolean + bigint); // TypeError - Cannot mix BigInt and other types

console.log(negative_boolean + empty_string); // "false"
console.log(negative_boolean + string); // "falseHello"
console.log(negative_boolean + one); // "1"
console.log(negative_boolean + zero); // "0"
console.log(negative_boolean + string_number); // "false123"
console.log(negative_boolean + string_number_alphabet); // "false123abc"
console.log(negative_boolean + positive_boolean); // "1"
console.log(negative_boolean + negative_boolean); // "0"
console.log(negative_boolean + null_value); // "0"
console.log(negative_boolean + undefined_value); // "NaN"
console.log(negative_boolean + symbol); // TypeError - Cannot convert Symbol to Number
console.log(negative_boolean + bigint); // TypeError - Cannot mix BigInt and other types

console.log(undefined_value + empty_string); // "undefined"
console.log(undefined_value + string); // "undefinedHello"
console.log(undefined_value + one); // "NaN"
console.log(undefined_value + zero); // "NaN"
console.log(undefined_value + string_number); // "undefined123"
console.log(undefined_value + string_number_alphabet); // "undefined123abc"
console.log(undefined_value + positive_boolean); // "NaN"
console.log(undefined_value + negative_boolean); // "NaN"
console.log(undefined_value + undefined_value); // "NaN"
console.log(undefined_value + null_value); // "NaN"
console.log(undefined_value + symbol); // TypeError - Cannot convert Symbol to Number
console.log(undefined_value + bigint); // TypeError - Cannot mix BigInt and other types

console.log(null_value + empty_string); // "null"
console.log(null_value + string); // "nullHello"
console.log(null_value + one); // "1"
console.log(null_value + zero); // "0"
console.log(null_value + string_number); // "null123"
console.log(null_value + string_number_alphabet); // "null123abc"
console.log(null_value + positive_boolean); // "1"
console.log(null_value + negative_boolean); // "0"
console.log(null_value + undefined_value); // "NaN"
console.log(null_value + null_value); // "0"
console.log(null_value + symbol); // TypeError - Cannot convert Symbol to Number
console.log(null_value + bigint); // TypeError - Cannot mix BigInt and other types

console.log(symbol + empty_string); // TypeError - Cannot convert Symbol to String
console.log(symbol + string); // TypeError - Cannot convert Symbol to String
console.log(symbol + one); // TypeError - Cannot convert Symbol to Number
console.log(symbol + zero); // TypeError - Cannot convert Symbol to Number
console.log(symbol + string_number); // TypeError - Cannot convert Symbol to String
console.log(symbol + string_number_alphabet); // TypeError - Cannot convert Symbol to String
console.log(symbol + positive_boolean); // TypeError - Cannot convert Symbol to Number
console.log(symbol + negative_boolean); // TypeError - Cannot convert Symbol to Number
console.log(symbol + undefined_value); // TypeError - Cannot convert Symbol to Number
console.log(symbol + null_value); // TypeError - Cannot convert Symbol to Number
console.log(symbol + symbol); // TypeError - Cannot convert Symbol to Number
console.log(symbol + bigint); // TypeError - Cannot convert Symbol to Number

console.log(bigint + empty_string); // "123"
console.log(bigint + string); // "123Hello"
console.log(bigint + one); // TypeError - Cannot mix BigInt and other types
console.log(bigint + zero); // TypeError - Cannot mix BigInt and other types
console.log(bigint + string_number); // "123123"
console.log(bigint + string_number_alphabet); // "123123abc"
console.log(bigint + positive_boolean); // TypeError - Cannot mix BigInt and other types
console.log(bigint + negative_boolean); // TypeError - Cannot mix BigInt and other types
console.log(bigint + undefined_value); // TypeError - Cannot mix BigInt and other types
console.log(bigint + null_value); // TypeError - Cannot mix BigInt and other types
console.log(bigint + symbol); // TypeError - Cannot convert Symbol to Number
console.log(bigint + bigint); // "246n"