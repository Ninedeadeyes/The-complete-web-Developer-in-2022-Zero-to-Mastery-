//#1 change this function into a ternary and assign it to variable called experiencePoints
function experiencePoints() {
    if (winBattle()) {
        return 10;
    } else {
        return 1;
    }
}


// condition ? expression 1 or  expression 2 

let experiencePoints=winBattle()? 10 : 1; 


//Using this function, answer the questions below:
function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}

//#2 return value when moveCommand("forward");
//nothing /undefine

//#3 return value when moveCommand("back");
// whatHappens = "you arrived home";
//#4 return value when moveCommand("right");
//return whatHappens = "you found a river";

//#5 return value when moveCommand("left")
//nothing/ undefine

//BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!

function diceRoll(number){
    let dialogue;
    switch(number){
        case 1:
            dialogue="bad luck ";
            break;
        case 3:
            dialogue="ok";
            break;
        case 6:
            dialogue="good luck ";
            break;

        }

        console.log(dialogue);   
    }
    

    diceRoll(1);
    diceRoll(6);
