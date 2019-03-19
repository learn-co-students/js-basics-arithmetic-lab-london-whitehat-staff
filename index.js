/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!

const newID = oldID + 1000000000;
const ageIsValid = Number.isInteger(18);
const randomNumber = Math.random(20);
const randomInteger = Math.floor(randomNumber);
const randomInt = Math.floor((randomNumber)* 10) + 1;
const randomUserID = 1000000000 + randomInt;
console.log(randomUserID);
