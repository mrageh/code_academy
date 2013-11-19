var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        printPerson(contacts[i]);
    }
}


/*Create a search function
then call it passing "Jones"*/
function search(lastName) {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        if (lastName === contacts[i].lastName) {
            printPerson(contacts[i]);
        }
    }
}
search("Jones");

function add(firstName, lastName, phoneNumber, email) {
    contacts[contacts.length] = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    phoneNumber: phoneNumber,
    };
}
add("dan","man", "lol", 134);
list();var friends = {};
friends.bill = {
    firstName: "Bill",
    lastName: 'noo',
    age: 26,
    number: 44309,
    address: [19, "langley grove"]
};
friends.steve = {
    firstName: "Steve",
    lastName: "lol",
    age: 25,
    number: 0121,
    address: [24, "langley grove"]
};
var list = function(friends){
    for(var friend in friends){
        console.log(friend);
    }
};
var search = function(name){
    for(var lol in friends){
        if(friends[lol].firstName === name){
            console.log(friends[lol]);
            return friends[lol];
        }
    }
};
search("Bill");
