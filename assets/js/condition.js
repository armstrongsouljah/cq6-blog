// condition statements
/*
if(expression) {
    // code goes here
}
*/

const IG_MIN_AGE = 13;
let susan = {
    age:12,
    number: "dedededed"
};

// if statement
if(susan.age >= IG_MIN_AGE) {
   console.log('Congrats you can join instragram!');
}

// send exit message for age 45-60
let oldiesAge = 45;
const MIN_EXIT_AGE = 45;
const MAX_EXIT_AGE = 60;
if (oldiesAge >= MIN_EXIT_AGE && oldiesAge <= MAX_EXIT_AGE) {
    console.log('You should plan leaving instagram, boomer!')
}

// if else, 
if(susan.age >= IG_MIN_AGE) {
    console.log('Congrats you can join instragram!');
 } else {
     // runs if above condition isn't met
     console.log("Sorry you can't watch reels yet!")
 }

 // else if
 if(susan.age >= IG_MIN_AGE) {
    console.log('Congrats you can join instragram!');
 } else if(susan.age == IG_MIN_AGE-1) {
     // you're 12 years 
     console.log('Just one more year and you post boomerangs')
 } else if(susan.age == IG_MIN_AGE-2) {
    // message to 11 yr olds
     console.log('You have 2 yrs until you join,  be patient!')
 } else {
     console.log('Please concentrate on school for now')
 }


 // switch case
 switch (susan.age) {
     // conditions
     case  susan.age >= IG_MIN_AGE:
        console.log('Congrats you can join instragram!');
        break;
    case susan.age == IG_MIN_AGE-1:
        console.log('Just one more year and you post boomerangs');
    case susan.age == (IG_MIN_AGE-2):
        console.log('You have 2 yrs until you join,  be patient!');
        break;
    default:
        console.log('Please concentrate on school for now')
 }

 // ternary operator
 // condition ? truthy: falsey;

let ageGroup =  ((susan.age >= 18) ? "Adult": "Minor");

if (susan.age >= 18) {
   ageGroup = "Adult";
} else {
   ageGroup = "Minor";
}