console.log("Hello World!");

console.table([a, b, c]);
console.table({ a, b, c });

console.group(a, b, c);
console.group([a, b, c]);
console.group({ a, b, c });

console.error("This Is An Error Message");
console.warn("This Is A Warning Message");
console.info("This Is An Informational Message");
console.debug("This Is A Debug Message");
console.time("Loop Time");

console.clear();



// ------------------------------------------------------------------------------------------------



alert("This Is An Alert Message");



// ------------------------------------------------------------------------------------------------



let name = prompt("Enter Your Name : ");



// ------------------------------------------------------------------------------------------------



if (confirm("Are You Sure ?")) {
    console.log("User Clicked Ok!");
}
else {
    console.log("User Clicked Cancel!");
}