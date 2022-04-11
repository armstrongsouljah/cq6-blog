class Person {
     name = "Devota";
     gender = "Female";
}

// instantiate
const myPerson = new Person()

//  console.log('**', this)
// console.log(myPerson.);
// object 2
class Person2 {
    constructor(name, age, gender="Female") {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    // static method 
    static getAgeAndName() {
        console.log(this.name, " ", this.age);
    }
    printName() {
        console.log("My name is: ", this.name)
    }
}

// instantiate again
let p1 = new Person2("Eve", 24, "Female");
let p2 = new Person2("Tracy", 22);

Person2.getAgeAndName();
// p2.getAgeAndName();
console.log(p2.age, p2.name);

p1.printName();
p2.printName();