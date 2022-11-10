

//Ternary operator 

// condition ? expression 1 or  expression 2 

// for example : 


function isUserValid(bool){
    return bool;
}

let answer=isUserValid(true) ? "You may enter": "Access Denied"

console.log(answer);

let automatedAnswer="Your account is "+(isUserValid(false)? "1234":"not avaiable")

console.log(automatedAnswer);

// same as below if else statment but with much less code. 

function condition(){

    if (isUserValid(true)){
        return("you may enter");
    
    }

    else{
        return("Access Denied");
    }
}

let answer2=condition();

console.log(answer2);

// switch statement 

// Good when you have a lot of conditions. 

function moveCommand(direction){
    let whatHappens;
    switch(direction){
        case "forward":
            whatHappens="You encounter a monster";
            break;
        case "back":
            whatHappens="You arrived home ";
            break;
        case "right":
            whatHappens="You found a river";
            break;

        case "left":
            whatHappens="You run into a troll ";
            break;  // this will break out of the case statement 
        default:
            whatHappens="Please enter a valid direction";
            // no break so it will go back to the beginning of function 
    }

    console.log(whatHappens);
    return(whatHappens);
    
}

moveCommand("forward");
moveCommand("right");
moveCommand("rigfdht");





