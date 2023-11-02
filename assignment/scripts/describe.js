// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;


if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We declare a variable with the String of Dane
// We create a conditional that determines if the name variable equals the string Mary, which it doesnt, so the else block is ran
// Since the boolean equated to false, the else block would be executed
// console.log would execute the string 'How do you do'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// On line 56 we declare a variable called secret and leave it as undefined
// On line 58 we declare a variable called code and set it equal to the integer of 123
// On line 60 we execute a boolean function to see if code is equal to 123, which would return true
// Because Line 60 was true, we set secret equal to the string super and we multiple code by 2 (123 * 2)
// we then ask if code(123 * 2 = 246 )  is greater than 250, which it isnt, so we print out the secret which is super (not duper :( ) 

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declare the variables isStudent to true, age to the intger 34, and zip to the integer of 55407
// Then we enter a conditional 
// The first if block checks if isStudent strictly equals true AND zip > 80000 
//          isStudent is true and zip = 55407 which would make this block false so the console.log would be skipped
// Next it checks if isStudent = false or age < 30
//            isStudent is True and age = 34, which would make this block false so the console.log would be skipped
// Next we check if isStudent = true, which it does, so console.log "Welcome to Prime!" would be executed
// Lastly, the last else block would not be executed because it would 'break' during the Welcome to prime portion



//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*  
// FIX - colorOne in the description is saying it should be set to blue and colorTwo should be red
// Change the values of colorOne and colorTwo
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - description says we should change colorOne and colorTwo to purple, however we are only changing colorOne
// add in colorTwo = 'purple';
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX In the conditional provided || denotes 'or' , however we need both
// put && instead of ||

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX we're checking if age is greater than or equal to 21, which it is, we need to change the console.log to be enter instead of no entry
// Another soultion would be to swithc the if statement around and say if (age <= minAge) or if (age >=  minAge) {enter} else {no enter}

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/



