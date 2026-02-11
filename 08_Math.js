console.log(Math); // Object [Math] {}



// ------------------------------------------------------------------------------------------------



// Math Properties :-

// .PI - return the value of PI
console.log(Math.PI); // 3.141592653589793



// ------------------------------------------------------------------------------------------------



// Math Methods :-

// .abs() - return the absolute (positive) value
console.log(Math.abs(3)); // 3
console.log(Math.abs(-3)); // 3

// .sign() - return +1, -1 & 0 based on if the number is positive, negative or zero
console.log(Math.sign(3)); // 1
console.log(Math.sign(-3)); // -1
console.log(Math.sign(0)); // 0

// .pow() - return the value of second number to be the power of first number
console.log(Math.pow(2, 3)); // 8
console.log(Math.pow(3, 2)); // 9

// .sqrt() - return the square root
console.log(Math.sqrt(4)); // 2
console.log(Math.sqrt(9)); // 3

// .round() - round off to the nearest integer
console.log(Math.round(2.4)); // 2 (less than 5)
console.log(Math.round(2.5)); // 3 (equal to 5)
console.log(Math.round(2.6)); // 3 (greater than 5)

// .ceil() - round up to the nearest integer, i.e., if +1 after ".", increase the number by +1, else return number itself
console.log(Math.ceil(2)); // 2
console.log(Math.ceil(2.0)); // 2
console.log(Math.ceil(2.1)); // 3

// .floor() - round down to the nearest integer, i.e., if "." exists, remove it)
console.log(Math.floor(2)); // 2
console.log(Math.floor(2.0)); // 2
console.log(Math.floor(2.1)); // 2

// .max() - return the maximum vallue in a set of numbers
console.log(Math.max(1, 2, 3, 4, 5)); // 5

// .min() - return the minimum vallue in a set of numbers
console.log(Math.min(1, 2, 3, 4, 5)); // 1

// .random() - return a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()); // 0.4234567890123456
console.log(Math.random() * 10); // 4.234567890123456
console.log(Math.floor(Math.random() * 10) + 1); // 1 to 10 (random integer)