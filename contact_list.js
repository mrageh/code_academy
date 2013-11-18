var friends = {};
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
