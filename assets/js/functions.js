let _age = 13;
let myName2  ="Annie";


function checkAge() {
    let _age = 15;
    let myName2  ="Mary";
    console.log('local scope', myName2);

    if (_age>= 16) {
        console.log("You may proceed and attend");
    } else {
        console.log("Sorry, we can't let you in.")
    }
}
checkAge() // call, invoke, execute

console.log('global scope', myName2);
