
let user3={
    username:"Tom",
    password:"bob"

}

let database=[    
    {
        username:"tom",
        password:"sup"
    },

    {
        username:"andy",
        password:"abc"
    },

    {
        username:"jess",
        password:"123"
    }

];

let newsFeed=[    
    {
        username:"Tom",
        timeline:"So tired from all that learning"
    },

    {
        username:"Sally",
        timeline:"JavaScript is so cool"
    },

    {
        username:"jess",
        timeline:"Just woke up"
    }

];

let userNamePrompt=prompt(" What's your username ?");
let passwordPrompt=prompt("What is your password?")


function isUserValid(username,password){
    for(let i=0; i<database.length; i++){
        if(database[i].username===username && database[i].password===password){
            return true;
        }
    }
    return false;

jess
}

function signIn(username,password){

    if (isUserValid(username,password)){
        console.log(newsFeed);
    }
    else{

        alert("Sorry, wrong username and password")
    }

}

signIn(userNamePrompt,passwordPrompt);