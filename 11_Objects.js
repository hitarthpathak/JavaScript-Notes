// DECLARING OBJECT :-

// new Object() :

let new_user = new Object();

new_user.name = "Hitarth Pathak";
new_user.age = 24;
new_user.single = true;
new_user.family = ["Father", "Mother", "Brother"];
new_user.favourites = {
    movie: "Titanic",
    sport: "Badminton",
    song: "Amplifier"
};
new_user.active = function () { console.log("Hello World! I Am Active :-)"); }

console.log(new_user);
// "{
//   name: "Hitarth Pathak",
//   age: 24,
//   single: true,
//   family: [ "Father", "Mother", "Brother" ],
//   favourites: { movie: "Titanic", sport: "Badminton", song: "Amplifier" },
//   active: [Function: active]
// }"

console.log(new_user.name);
// "Hitarth Pathak"

console.log(new_user.age);
// "24"

console.log(new_user.single);
// "true"

console.log(new_user.family);
// "["Father", "Mother", "Brother"]"

console.log(new_user.favourites);
// "{movie: "Titanic", sport: "Badminton", song: "Amplifier"}"

console.log(new_user.active);
// "[Function: active]"

console.log(new_user.active());
// "Hello World! I Am Active :-)
// undefined"

// ----------------------------------------------

// Constructor Method : (creates an object with a specified prototype, updating this new object does not modify original object)

let hitarth_pathak = Object.create(new_user);

console.log(Hitarth_Pathak);
// "{}"

console.log(Hitarth_Pathak.name);
// "Hitarth Pathak"

console.log(Hitarth_Pathak.age);
// "24"

console.log(Hitarth_Pathak.single);
// "true"

console.log(Hitarth_Pathak.family);
// "["Father", "Mother", "Brother"]"

console.log(Hitarth_Pathak.favourites);
// "{movie: "Titanic", sport: "Badminton", song: "Amplifier"}"

console.log(Hitarth_Pathak.active);
// "[Function: active]"

console.log(Hitarth_Pathak.active());
// "Hello World! I Am Active :-)
// undefined"

// ----------------------------------------------

// Object Literal :

let user = {
    name: "Hitarth Pathak",
    age: 24,
    single: true,
    family: ["Father", "Mother", "Brother"],
    favourites: {
        movie: "Titanic",
        sport: "Badminton",
        song: "Amplifier"
    },
    active: function () { console.log("Hello World! I Am Active :-)"); }
};

console.log(user);
// "{
//   name: "Hitarth Pathak",
//   age: 24,
//   single: true,
//   family: [ "Father", "Mother", "Brother" ],
//   favourites: { movie: "Titanic", sport: "Badminton", song: "Amplifier" },
//   active: [Function: active]
// }"

console.log(user.name);
// "Hitarth Pathak"

console.log(user.age);
// "24"

console.log(user.single);
// "true"

console.log(user.family);
// "["Father", "Mother", "Brother"]"

console.log(user.favourites);
// "{movie: "Titanic", sport: "Badminton", song: "Amplifier"}"

console.log(user.active);
// "[Function: active]"

console.log(user.active());
// "Hello World! I Am Active :-)
// undefined"



// ------------------------------------------------------------------------------------------------



console.log(typeof new_user); // "object"
console.log(typeof hitarth_pathak); // "object"
console.log(typeof user); // "object"



// ------------------------------------------------------------------------------------------------



// ACCESSING VALUES :-

// - Behind the scenes, Object treat all the Keys as Strings.
// ---------------------------
// | let obj = {             |
// |     key: "Value"        |
// | };                      |
// |                         |
// | SAME AS                 |
// |                         |
// | let obj = {             |
// |     "key": "Value"      |
// | };                      |
// ---------------------------

let obj = {
    key_1: "Value 1",
    "key_2": "Value 2",
    "key 3": "Value 3"
};

console.log(obj);
// "{
//     key_1: "Value 1",
//     "key_2": "Value 2",
//     "key 3": "Value 3"
// }"

console.log(obj.key_1);
// "Value 1"

console.log(obj["key_2"]);
// "Value 2"

// console.log(obj.key 3);
// "SyntaxError: missing ) after argument list"
// console.log(obj."key 3");
// "SyntaxError: Unexpected string"
console.log(obj["key 3"]);
// "Value 3"



// ------------------------------------------------------------------------------------------------



// SYMBOL IN OBJECT :-

let id = Symbol();

let symbol_object_1 = {
    id: "1"
};

console.log(symbol_object_1);
// "{
//     id: "1"
// }"

console.log(typeof symbol_object_1.id);
// "string"


// Correct way to use Symbol in Object :

let symbol_object_2 = {
    [id]: "1"
};

console.log(symbol_object_2);
// "{
//     Symbol(): "1"
// }"

console.log(typeof symbol_object_2[id]);
// "string"




// ------------------------------------------------------------------------------------------------



// FREEZING OBJECT :-

Object.freeze(user);

user.single = false;

console.log(user);
// "{
//   name: "Hitarth Pathak",
//   age: 24,
//   single: true,
//   family: [ "Father", "Mother", "Brother" ],
//   favourites: { movie: "Titanic", sport: "Badminton", song: "Amplifier" },
//   active: [Function: active]
// }"



// ------------------------------------------------------------------------------------------------



// MERGING OBJECT :-

let obj_1 = {
    1: "1",
    2: "2",
    3: "3"
};

let obj_2 = {
    1: "1",
    2: "2",
    3: "3"
};

console.log({ obj_1, obj_2 });
// "{
//     obj_1: { "1": "1", "2": "2", "3": "3" },
//     obj_2: { "1": "1", "2": "2", "3": "3" }
// }"

console.log({ ...obj_1, ...obj_2 });
// "{ "1": "1", "2": "2", "3": "3" }"



// ------------------------------------------------------------------------------------------------



// KEYS, VALUES & ENTRIES :- (returns an Array)

// Getting all the Keys :

console.log(Object.keys(user));
// "[ "name", "age", "single", "family", "favourites", "active" ]"

// Getting all the Values :

console.log(Object.values(user));
// "[
//   "Hitarth Pathak",
//   24,
//   true,
//   [ "Father", "Mother", "Brother" ],
//   { movie: "Titanic", sport: "Badminton", song: "Amplifier" },
//   [Function: active]
// ]"

console.log(Object.entries(user));
// "[
//   [ "name", "Hitarth Pathak" ],
//   [ "age", 24 ],
//   [ "single", true ],
//   [ "family", [ "Father", "Mother", "Brother" ] ],
//   [
//     "favourites",
//     { movie: "Titanic", sport: "Badminton", song: "Amplifier" }
//   ],
//   [ "active", [Function: active] ]
// ]"

// -------------------------------------------------------------
/* |*/ console.log(user.hasOwnProperty("family"));  // "true"  |
/* |*/ console.log(user.hasOwnProperty("address")); // "false" |
// -------------------------------------------------------------



// ------------------------------------------------------------------------------------------------



// DE-STRUCTURING :-

let { name } = user;
console.log(name);
// "Hitarth Pathak"

let { name, age, single } = user;
console.log(name, age, single);
// // "Hitarth Pathak 24 true"