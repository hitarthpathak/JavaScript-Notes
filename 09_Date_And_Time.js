// THE STANDARD DATE : January 1, 1970, UTC



// ------------------------------------------------------------------------------------------------



console.log(Date()); // "Wed Jul 01 2026 19:16:37 GMT+0530 (India Standard Time)" (current date and time in local format)
let current_date = new Date();
console.log(current_date); // "2026-07-01T13:47:08.154Z" (current date and time in UTC format)
let current_time = Date.now();
console.log(current_time); // "1782913964468" (current timestamp in milliseconds since January 1, 1970, UTC)



// ------------------------------------------------------------------------------------------------



// DATE & TIME METHODS :-

console.log(current_date.getDate()); // "1" (returns the day of the month (from 1-31))
console.log(current_date.getDay()); // "3" (returns the day of the week (from 0-6) - 0: Sunday, 1: Monday, 2: Tuesday, 3: Wednesday, 4: Thursday, 5: Friday, 6: Saturday)
console.log(current_date.getMonth()); // "6" (returns the month (from 0-11) - 0: January, 1: February, 2: March, 3: April, 4: May, 5: June, 6: July, 7: August, 8: September, 9: October, 10: November, 11: December)
console.log(current_date.getFullYear()); // "2026" (returns the year (four digits))

console.log(current_date.getTime()); // "1782913964468" (returns the number of milliseconds since January 1, 1970, UTC)
console.log(current_date.getMilliseconds()); // "763" (returns the milliseconds (from 0-999))
console.log(current_date.getSeconds()); // "30" (returns the seconds (from 0-59))
console.log(current_date.getMinutes()); // "23" (returns the minutes (from 0-59))
console.log(current_date.getHours()); // "19" (returns the hours (from 0-23))

console.log(current_date.toDateString()); // "Wed Jul 01 2026" (returns the date in a human-readable format)
console.log(current_date.toTimeString()); // "19:26:29 GMT+0530 (India Standard Time)" (returns the time in a human-readable format)
console.log(current_date.toLocaleString()); // "7/1/2026, 7:28:09 PM" (returns the date and time in a human-readable format based on the locale)
console.log(current_date.toLocaleDateString()); // "7/1/2026" (returns the date in a human-readable format based on the locale)
console.log(current_date.toLocaleTimeString()); // "7:27:05 PM" (returns the time in a human-readable format based on the locale)