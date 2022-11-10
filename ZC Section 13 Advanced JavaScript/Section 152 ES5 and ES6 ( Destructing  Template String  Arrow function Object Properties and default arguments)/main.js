// let and const  (ES6)

const player="bobby";
let experience=100;
let wizardLevel=false;

if (experience>90){
    let wizardLevel=true;
}

console.log(wizardLevel);

// with var you  create a scope only within a function but with let you create 
// a scope within 'if' (due to block scoping "{}"). All curly brackets create a scope. 

// const means you can't reassign a new variable. 

// but you will be able to change a property within a const object but can't reassign
// the variable 

const obj={

    player:"bobby",
    experience:100,
    wizardLevel:false

}

obj.wizardLevel=true;

console.log(obj.wizardLevel);

// Destructuring 

const obj2={

    player:"dan",
    experience:120,
    wizardLevel:true
}


// instead of 

const player2=obj2.player;
const exp=obj2.experience;
let wizardLvl=obj2.wizardLevel;

// You can do ( much cleaner )

const{player2Alt,expAlt}=obj2;
let{wizardLvAlt} =obj2;


// new way of declaring object property 
// you can now have ' dynamic property values'
//dynamic means to 'set a parameter to a value based on other object'
// for example 

const fullName="john snow ";

const obj3={
    [fullName]:"hello",
    ["ray"+"smith"]:"hi hi",
    [3+5]:"bye bye"
}

const a="Simon";
const b=true;
const c={};


// Object Properties 

// previous this is what you had to do 

const obj4={
    a:a,
    b:b,
    c:c
}

// if property and value is the same you can now 


const obj5={
 a,b,c

}


// Template strings

let mood= "well";
let age=32

const greeting ="Hello "+fullName+" you seem to be doing "+ mood +"!"

// now do this using 'back tick'  ( far left hand side of the keyboard ) 


const Bestgreeting =`Hello ${fullName} you seem to be doing ${mood} for your age ${age=25} !`

console.log(greeting);
console.log(Bestgreeting);

//default arguments 

// allow the function to use variables even if they are not been created previously (ageAlt)
// 

function greet(fullName="", mood="poorly",ageAlt=20 ){
    console.log (`Hello ${fullName} you seem to be doing ${mood} for your age ${ageAlt} !`)
}


greet();
greet("Sarah","great");

// missing a third argument for Sarah but still works due to the default argument


// JavaScript Types ( Symbol)

// use to create a completely unique type , not particular important 

let sym=Symbol();
let sym1=Symbol("foo");
let sym2=Symbol("foo");
let sym3=Symbol("foo");


//sym2===sym3 will come out as false 

// Arrow Function   (short hand form )

function add(a,b){
    return a+b;
}

// can use ( it will assume that it will return the expression)

const add=(a,b)=>a+b;





