


// function declaration

// The function declaration (function statement) defines a function with the specified parameters.

function sayHello(){
    console.log("Hello")

}

sayHello();


// function expression

// // The main difference between a function expression and a function declaration is the function name, 
// // which can be omitted in function expressions to create anonymous functions.

let sayBye=function(){
    console.log("Bye");

}

sayBye();


// can technically do the below to assign the function 

// let sayBye=function byebye(){
//     console.log("Bye");

// }

// sayBye();


function sing(){
    console.log("AAAAHHHHHH");
    console.log("TEEEEEEEEE");
}

sing();


// instead of creating a sing2 to change it you can use arguments 
// this will make 'sing' more extendable and flexible. 
// function sing2(){
//     console.log("Laaa dee daaa");
//     console.log("helllo");
//     console.log("backstreet back alright");
// }

// sing2();


function sing(song){
    console.log(song);
}

sing("Laaa dee daaa")
sing("helllo")
sing("backstreet back alright")



// input > function> output
// to return an output you need return 

// function multiply(a,b){
// a*b     

// }

// multiply(5,10);
// multiply(5,12);

// above will produce 'undefine because no 'return' 
// remember if you do console.log or alert you are not 
// returning a value  it is just displaying the answer 

function multiply(a,b){
return a*b     

}

multiply(5,10);
multiply(5,12);

// input in the console and they will work now 
// as soon as you invoke 'return' it ends the programme 
// hence you can only invoke it once. Can be used to end 
// a function. 

// can assign a function within a function, can be more 
// effcient than assigning to a variable

alert(multiply(3,4));

// parameter= (a,b) 
// arguments=  (3,4) 

function checkDriverAge (){
    age = prompt("What is your age?");

    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

checkDriverAge();


let checkDriveAge2=function(){
    age = prompt("What is your age?");

    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }


}

checkDriveAge2();


function checkDriverAge3 (age){
    
    if (Number(age) < 18) {
        console.log("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        console.log("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        console.log("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

checkDriverAge3(age);
