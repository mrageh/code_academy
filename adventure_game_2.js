var user = prompt("You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?").toLowerCase();
switch(user){
    case "fight":
        var strong = prompt("How courageous! Are you strong (YES or NO)?").toLowerCase();
        var smart = prompt("Are you smart?").toLowerCase();
        if(strong == "yes" || smart == "yes"){
        console.log("You only need one of the two! You beat the troll--nice work!");
        }
        break;
    case "pay":
        var amount = prompt("Well he wants a lot of money, so how much are you willing to cough up?");
        if(amount > 1000 && amount < 2000){
            console.log("Seems like you were rich enough to save your own ass");
        }
        else{
            console.log("Troll attacks you gameover!");
        }
        break;
    case "run":
        var scared = prompt("Are you scared?");
        if(scared === "yes"){
            console.log("He chases you forever");
        }
        break;
    default:
        console.log("Lol now you are toast!");
        break;
}
