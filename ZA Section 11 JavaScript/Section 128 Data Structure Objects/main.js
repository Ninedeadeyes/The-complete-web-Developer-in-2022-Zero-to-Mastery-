let user={
    name:"John",
    age:34,
    hobby:"Soccer",
    isMarried:false,
    shout:function(){
        console.log("AAAAAAAHHHHHH");
    }    

}; 

let list=["apple","banana","orange"];

// to grab info of an object 

console.log(user.name);
console.log(user.age);

// add to the object 


user.favouriteFood="spinach";


// change an element 

user.isMarried=true;


// An array isn't a JavaScript Type but an Object is 
// hence you can put an array inside an Object as well 
// as the vice versa 


user.spells=["fireball","ice spell","heal"];

let listUser=[
    {
        username:"andy",
        password:"secre"
    },

    {
        username:"jess",
        password:"123"
    },

]

console.log(user.spells[1]);
console.log(listUser[0].password);
console.log(user.shout());

//empty object 
let user2={};

//empty array 
let array2=[];

// data type called 'null' which basically means nothing 

let nullObj=null;

// can add things to user2 but not nullObj 
