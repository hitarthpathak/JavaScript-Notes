let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
let new_fruits = new Array("Apple", "Banana", "Mango", "Orange", "Grapes");

console.log(typeof fruits); // object
console.log(typeof new_fruits); // object
console.log(Array.isArray(fruits)); // true
console.log(Array.isArray(new_fruits)); // true



// ------------------------------------------------------------------------------------------------



// ARRAY PROPERTY :-

// .length - returns the length of an array
console.log(fruits.length); // "5"

fruits.length = 2; // setting the length of an array to a smaller value will remove elements from the end of an array (modifies original array)
console.log(fruits); // ["Apple", "Banana"]
fruits.length = 7; // setting the length of an array to a greater value will add empty slots to the end of an array (modifies original array)
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange", "Grapes", <2 empty items>]



// ------------------------------------------------------------------------------------------------



// ARRAY METHODS :-

// Modifies The Original Array :

// .push() - add new element at the end of an array
fruits.push("Pineapple");
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange", "Grapes", "Pineapple"]

// .pop() - remove the last element of an array
fruits.pop();
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange", "Grapes"]

// .unshift() - add new elements to the beginning of an array and returns the new length of an array
let new_length = fruits.unshift("Strawberry", "Pineapple");
console.log(fruits); // ["Strawberry", "Pineapple", "Apple", "Banana", "Mango", "Orange", "Grapes"]
console.log(new_length); // 7

// .shift() - remove and return the first element of an array
let removed_fruit = fruits.shift();
console.log(fruits); // ["Banana", "Mango", "Orange", "Grapes"]
console.log(removed_fruit); // "Apple"

// .splice() - add / remove / replace elements from an array
// ------------------------------------------------------------------------
// | array.splice(start_index, delete_count, item_1, item_2, item_3, ...) |
// ------------------------------------------------------------------------
fruits.splice(2, 0, "Strawberry", "Pineapple", "Lichi"); // add "Strawberry", "Pineapple" and "Lichi" at index 2 and remove 0 elements from index 2
console.log(fruits); // ["Apple", "Banana", "Strawberry", "Pineapple", "Lichi", "Mango", "Orange", "Grapes"]
fruits.splice(2, 2, "Strawberry", "Pineapple", "Lichi"); // add "Strawberry", "Pineapple" and "Lichi" at index 2 and remove 2 elements from index 2
console.log(fruits); // ["Apple", "Banana", "Strawberry", "Pineapple", "Lichi", "Grapes"]
fruits.splice(2, 3); // remove 3 elements from index 2
console.log(fruits); // ["Apple", "Banana"]
fruits.splice(2, 3, "Mango", "Orange", "Grapes"); // add "Mango", "Orange", "Grapes" at index 2 and remove 3 elements from index 2
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange", "Grapes"]
// --------------------------------------------------------------------------------------
/*|*/ let removed_fruits = fruits.splice(2, 3); // returns an array of removed elements |
/*|*/ console.log(removed_fruits); // ["Mango", "Orange", "Grapes"]                     |
// --------------------------------------------------------------------------------------

// .reverse() - reverse the order of an array
fruits.reverse();
console.log(fruits); // ["Grapes", "Orange", "Mango", "Banana", "Apple"]

// .sort() - sort an array in ascending / descending order
// -----------------------------------------------------------------------
// | strings.sort((a, b) => a.localeCompare(b)); // Ascending (Strings)  |
// | strings.sort((a, b) => b.localeCompare(a)); // Descending (Strings) |
// | numbers.sort((a, b) => a - b); // Ascending (Numbers)               |
// | numbers.sort((a, b) => b - a); // Descending (Numbers)              |
// -----------------------------------------------------------------------
fruits.sort((a, b) => a.localeCompare(b));
console.log(fruits); // ["Apple", "Banana", "Grapes", "Mango", "Orange"]
fruits.sort((a, b) => b.localeCompare(a));
console.log(fruits); // ["Orange", "Mango", "Grapes", "Banana", "Apple"]

// ----------------------------------------------

// Doesn't Modify The Original Array :

// .concat() - merge two or more arrays
let fresh_fruits = ["Strawberry", "Pineapple", "Lichi"];
console.log(fruits.concat(fresh_fruits)); // ["Apple", "Banana", "Mango", "Orange", "Grapes", "Strawberry", "Pineapple", "Lichi"]
console.log(fresh_fruits.concat(fruits)); // ["Strawberry", "Pineapple", "Lichi", "Apple", "Banana", "Mango", "Orange", "Grapes"]
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange", "Grapes"]

// .join() - convert array to string
console.log(fruits.join()); // "Apple,Banana,Mango,Orange,Grapes"
console.log(fruits.join(",")); // "Apple,Banana,Mango,Orange,Grapes"
console.log(fruits.join(", ")); // "Apple, Banana, Mango, Orange, Grapes"
console.log(fruits.join("")); // "AppleBananaMangoOrangeGrapes"
console.log(fruits.join(" ")); // "Apple Banana Mango Orange Grapes"

// .toString() - convert array to a comma-separated string (you cannot change the separator, it will always return a string with comma separated values)
console.log(fruits.toString()); // "Apple,Banana,Mango,Orange,Grapes"
console.log(fruits.toString(",")); // "Apple,Banana,Mango,Orange,Grapes"
console.log(fruits.toString(", ")); // "Apple,Banana,Mango,Orange,Grapes"
console.log(fruits.toString("")); // "Apple,Banana,Mango,Orange,Grapes"
console.log(fruits.toString(" ")); // "Apple,Banana,Mango,Orange,Grapes"

// .slice() - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
fruits.slice(1, 4); // returns a new array from index 1 to index 3 (4 not included)
console.log(fruits.slice(1, 4)); // ["Banana", "Mango", "Orange"]
console.log(fruits.slice(2)); // ["Mango", "Orange", "Grapes"]
console.log(fruits.slice(-3)); // ["Mango", "Orange", "Grapes"]
console.log(fruits.slice(-4, -1)); // ["Banana", "Mango", "Orange"]
// ----------------------------------------------------------------------------------------------------------------------------------------------------
// | negative values in the slice() method means counting from the end of an array. -1 is the last element, -2 is the second last element, and so on. |
// ----------------------------------------------------------------------------------------------------------------------------------------------------

// .indexOf() - returns the index of a specified value in an array (only the first match)
console.log(fruits.indexOf("Mango")); // "2"
console.log(fruits.indexOf("Banana")); // "1"
console.log(fruits.indexOf("Pineapple")); // "-1" (if not found)

// .at() - returns the value at a specific index in an array (allows negative indexes)
console.log(fruits.at(2)); // "Mango"
console.log(fruits.at(-2)); // "Orange"

// .find() - returns the value of the first element in an array that satisfies a provided testing function
let fruit_basket = ["Apple", "Banana", "Mango", "Orange", "Grapes", "Mango", "Banana", "Apple"];
let fruit = fruit_basket.find((fruit) => fruit === "Mango");
console.log(fruit); // "Mango"

// .findIndex() - returns the index of the first element in an array that satisfies a provided testing function
let index = fruits.findIndex((fruit) => fruit === "Mango");
console.log(index); // "2"

// .includes() - tests whether an array includes a certain value among its entries and returns a boolean value
console.log(fruits.includes("Mango"));
console.log(fruits.includes("Guava"));

// .some() - tests whether at least one element in an array passes the test implemented by the provided function and returns a boolean value
let has_mango = fruits.some((fruit) => fruit === "Mango");
console.log(has_mango); // true
let has_guava = fruits.some((fruit) => fruit === "Guava");
console.log(has_guava); // false

// .every() - tests whether all elements in an array pass the test implemented by the provided function and returns a boolean value
let all_fruits_are_strings = fruits.every((fruit) => typeof fruit === "string");
console.log(all_fruits_are_strings); // true
let all_fruits_have_a = fruits.every((fruit) => fruit.includes("a"));
console.log(all_fruits_have_a); // false

// .flat() - returns a new array with all sub-array elements concatenated into it recursively up to the specified depth
// -----------------------------
// | Syntax: array.flat(depth) |
// -----------------------------
let nested_array = [1, 2, [3, 4, [5, 6]]];
console.log(nested_array.flat()); // [1, 2, 3, 4, [5, 6]]
console.log(nested_array.flat(0)); // [1, 2, [3, 4, [5, 6]]]
console.log(nested_array.flat(1)); // [1, 2, 3, 4, [5, 6]]
console.log(nested_array.flat(2)); // [1, 2, 3, 4, 5, 6]
console.log(nested_array.flat(Infinity)); // [1, 2, 3, 4, 5, 6]

// Iterators :

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// .map() - returns a new array with the value returned from the callback
let result = numbers.map((num) => {
    return num * 2;
});
console.log(result);
[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// .filter() - returns a new array with only the true values returned from the callback
let even_numbers = numbers.filter((num) => {
    return num % 2 === 0;
});
console.log(even_numbers);
[2, 4, 6, 8, 10]

// .forEach() - executes a function for every element and returns undefined (no array)
numbers.forEach((num) => {
    console.log(num * 2);
});
2
4
6
8
10
12
14
16
18
20

// .reduce() - combine all the elements of an array into a single result
let sum = numbers.reduce((accumulator, current_element) => {
    return accumulator + current_element;
}, 0);
console.log(sum);
55

// --------------------------------------------------
// | Basic Syntax :-                                |
// | array.reduce((accumulator, current_value) => { |
// |   return new_value;                            |
// | }, initial_value);                             |
// --------------------------------------------------

// ----------------------------------------------------------------------------
// | map(), filter(), forEach() and reduce() do not modify the original array |
// ----------------------------------------------------------------------------