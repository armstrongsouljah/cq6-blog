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


const person = {
    name: "Mercy",
    contact: {
        phone: "256099000000",
        email: "janedoe@server.com",
        ig: "instagram.com/mercy_245"
    },
    456: {
        name: "Ultra"
    }
}

// access data within nested object
console.log(person.contact.ig) // dot notation
console.log(person['contact']['ig'])

// person[456].name;

// manipulates behavior for the index page
let postTitle = "How to center headings on  a page?";
let postContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, \
                 when an unknown printer took a galley of type and scrambled it to make a type \
                 specimen book. It has survived not only five centuries, but also the leap into \
                 electronic typesetting, remaining essentially unchanged. \
                 It was popularised in the 1960s with the release of Letraset sheets containing \
                 Lorem Ipsum passages, and more recently with desktop publishing software like \
                 Aldus PageMaker including versions of Lorem Ipsum";
let postAuthor = "Eve Akansasira";

console.log(postTitle, "*****", postContent,"****", postAuthor)