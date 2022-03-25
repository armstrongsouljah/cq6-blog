firstName = "";
lastName = "Armstrong";
firstName = "Muhwezi";
let city = "Kampala"
let district = "Wakiso"

fullName = firstName.concat(" ", lastName, " ", city, " ", district);
fullName = firstName + " " + lastName + " " + city + "  " + district;
fullName = `${firstName}  ${lastName}  ${city}  ${district}` //tilde
console.log(fullName)

let lastUpper

lastName = "Armstrong"
name = "Armstrong"
console.log(lastName.trim() == name)



// console.log(fullName.replace(/ /g, ""))

console.log(lastName.toLowerCase() == name.toLowerCase())

// object
// let person = {}
// let person = new Object()

let codeQueenAddress = {
    town: "Ntinda",
    city: "Kampala",
    seatingCapacity: 10000,
    building: "Ntinda Complexor",
    office: "Innovation Village",
    343434: "Some inform"
}

// get infor out of object
let officeName = codeQueenAddress.office;
let town = codeQueenAddress.town;
let seatingCapacity = codeQueenAddress['seatingCapacity']

codeQueenAddress[343434] // for numbers
// assigning more properties
codeQueenAddress.isAvailable = true;

console.log('town >>>> ' ,town)
codeQueenAddress.town = "Kamwokya"; // changes the value of town
codeQueenAddress.office = "The Hive Collab";
codeQueenAddress.hasElevator = true;

console.log('town >>>> ' ,town)

console.log(codeQueenAddress)

let newOffice = Object.assign({}, codeQueenAddress)  // makes a detached copy




// newOffice = codeQueenAddress // assign by reference
// let altOffice = {...codeQueenAddress}

// altOffice = {...altOffice, office: 'Nakawa', town: 'Nakawa'}