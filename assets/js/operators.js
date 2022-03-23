// commonly used operators in js

// asssignment operators
let currentAge = 28;
let ageIn5Yrs = (currentAge+5) // option 1
// ageIn5Yrs += // get the value of ageIn5 and add something
// ageIn5Yrs+= (currentAge+5);
// console.log(ageIn5Yrs)


let age = 0;
// age+=6;  same as below
age = age + 6;


let ageInHalf = ageIn5Yrs / 2;
let num = 2;

num *= 5;
// num = num * 5
console.log('>>>>>>>>>',num)

let age2YrsAgo = ((num - 2) + 6) / 7;

// Modulo operator
let remainder = age2YrsAgo % 3;  // returns the remainder after dividing the number in the expression

// logical operators

let truth = true && true;
let lie = true && false; // logical AND
let lie2 = lie || truth; // logical OR
let lieIsh  = truth && lie;


// comparison operators
let numOne, numTwo; // camelCase js 
numOne = 55;
numTwo = 78;
let isEqual = (numOne == numTwo);  //  ==
let equalStrict = numOne === numTwo // strict comparison
let isGreater = (numTwo > numOne); // >
let isLess = numTwo < numOne; // <
let isLessOEqual = (numOne <= numTwo); // <=
let isGreaterOEqual = (numOne >= numTwo); // >=

let notEqual = numOne != numTwo;
let notEqualStrict = numOne !== numTwo;

// data types not operators

let name;
console.log(name)
name = null;

console.log(name)