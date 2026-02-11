// ARITHMETIC OPERATORS :-
// 1. + (Addition)
// 2. - (Subtraction)
// 3. * (Multiplication)
// 4. / (Division)
// 5. % (Modulus - Division Remainder)
// 6. ** (Exponentiation)
// 7. ++ (Increment)
// 8. -- (Decrement)



// ------------------------------------------------------------------------------------------------



// ASSIGNMENT OPERATORS :-
// 1. = (Assignment)
// 2. += (Addition Assignment)
// 3. -= (Subtraction Assignment)
// 4. *= (Multiplication Assignment)
// 5. /= (Division Assignment)
// 6. %= (Modulus Assignment)
// 7. **= (Exponentiation Assignment)



// ------------------------------------------------------------------------------------------------



// COMPARISON OPERATORS :-
// 1. == (Equal)
// 2. === (Strict Equal)
// 3. != (Not Equal)
// 4. !== (Strict Not Equal)
// 5. > (Greater Than)
// 6. < (Less Than)
// 7. >= (Greater Than or Equal To)
// 8. <= (Less Than or Equal To)


// null vs undefined -

console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(null != undefined); // false
console.log(null !== undefined); // true
console.log(null > undefined); // false
console.log(null < undefined); // false
console.log(null >= undefined); // false
console.log(null <= undefined); // false


// with 0 -

console.log(null == 0); // false
console.log(null === 0); // false
console.log(null != 0); // true
console.log(null !== 0); // true
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null >= 0); // true (null converted to 0)
console.log(null <= 0); // true (null converted to 0)

console.log(undefined == 0); // false
console.log(undefined === 0); // false
console.log(undefined != 0); // true
console.log(undefined !== 0); // true
console.log(undefined > 0); // false
console.log(undefined < 0); // false
console.log(undefined >= 0); // false
console.log(undefined <= 0); // false

console.log(Infinity == 0); // false
console.log(Infinity === 0); // false
console.log(Infinity != 0); // true
console.log(Infinity !== 0); // true
console.log(Infinity > 0); // true
console.log(Infinity < 0); // false
console.log(Infinity >= 0); // true
console.log(Infinity <= 0); // false

console.log(NaN == 0); // false
console.log(NaN === 0); // false
console.log(NaN != 0); // true
console.log(NaN !== 0); // true
console.log(NaN > 0); // false
console.log(NaN < 0); // false
console.log(NaN >= 0); // false
console.log(NaN <= 0); // false



// ------------------------------------------------------------------------------------------------



// LOGICAL OPERATORS :-
// 1. && (AND)
// 2. || (OR)
// 3. ! (NOT)



// ------------------------------------------------------------------------------------------------



// BITWISE OPERATORS :-
// 1. & (AND)
// 2. | (OR)



// ------------------------------------------------------------------------------------------------



// NULLISH COALESCING OPERATOR :- a ?? b (return right-side if left-side is null or undefined)



// ------------------------------------------------------------------------------------------------



// TERNARY OPERATOR :- condition ? true_condition : false_condition (return true_condition or false_condition based on condition)