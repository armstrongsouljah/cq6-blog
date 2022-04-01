/* 
Syntax
for (counter, condition, expression) {
    // code goes here
}
*/

// elevator going down
// for loop
for(let floor=3; floor>1; floor--) {
  console.log("Going down", floor,);
  if(floor ==1) {
      console.log("You have arrived at your destination!")
  }
}

for(let num=1; num <= 10; num++) {
    console.log("Hi there!")
}

// while loop
const REQUIRED_AGE = 18;
let currentAge = 2;

while (currentAge < REQUIRED_AGE) {
    currentAge+=1;
    console.log("You are under age ", currentAge);
    // currentAge+=1;
}

// do while
let num=0;
do {
    num++;
    console.log("Hi there number: ", num)
//     
} while (num < 10);

// forEach
// for(of)
// `array
/*
let sumArray = [];
let myArrayV2 = new Array();  //TBD
*/
let fruits = [
    "Pears", "Jack Fruit", 
    "Grapes", "Banana", "Mellon",
    "Mangoes"
];

// total number of items
// array.length
let lastItem = fruits[fruits.length-1] /// stati
console.log(fruits[5]);
console.log("last item is: ", lastItem, fruits[fruits.length-1]);
fruits.push("Apples")  // add apple to fruits
// lastItem = fruits[fruits.length-1] 
console.log(fruits);
console.log("last item is: ", lastItem, fruits[fruits.length-1]);
fruits.push("Lemon")
lastItem = fruits[fruits.length-1] 
console.log("last item is: ", lastItem, fruits[fruits.length-1]);

//
let numSet1 = [1,2,3,4,5];
let numSet2 = [6,7,8,9,10]

let numbers = numSet1 + numSet2;  // approach1
let numbers2 = numSet1.concat(numSet2)
numbers =[...numSet1, ...numSet2]  // spread operator
numbers2.push("hello")
numbers.push(12)

console.log("appr1 ", numbers);
console.log("appr2 ", numbers2);
console.log(numbers === numbers2)





// loop over array
// appr:1
for (let item=0; item<fruits.length; item++) {
    console.log("Fruit: ", fruits[item])
}

// appr:2
fruits.forEach(function(fruit){
    // console.log("FR: ", fruit);
    let appleIndex = fruits.findIndex(
        fruitName => fruitName.toLowerCase() === 'bananas')
    // console.log("Index found ", appleIndex)
    // if ( appleIndex != -1){
    //     console.log("found it, exit", appleIndex); 
    //     return false;
    // } else {
    //     console.log("FR: ", fruit);
    // }
});

// exit for each
// fruits.every(function(fruit){
//     // console.log("FR: ", fruit);
//     let appleIndex = fruits.findIndex(
//         fruitName => fruitName.toLowerCase() === 'bananas')
//     console.log("Index found ", appleIndex)
//     if ( fruit == fruits[appleIndex]) {
//         return false;
//     } else {
//         console.log("FR: ", fruit);
//     }
        
    
for (let i=0; i<10; i++) {
    console.log('Value of I is: ', i);
    if(i==5) break;
    
}