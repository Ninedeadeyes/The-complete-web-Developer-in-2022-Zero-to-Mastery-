
// reference type 

/*

let object1={value:10};
let object2=object1;
let object3={value:10};

object1===object2
//true 

object1===object3 
// false 

object1.value=15;
//15

object2.value
//15

object3.value
//10

Primitive Type : Define by programming language eg : number, boolean, string  

Reference Type (non Primitive): created by the programmer 

Objects are known as Reference Type 

let number1=1  ( primitive type )
let object={value:10};  (Reference Type)

Object 1  create a new object in it put in value 10 into the box  (box1)
Object 2 I just want you to reference Object 1 ( references box 1)
Object 3  create a new object and in it put value 10 into this box (box3)

{}==[]
//false

is false because even though they look the same, they are different objects 

context  :

Where we are within the obejct 

function b(){
    let a= 4;
}

*/
console.log(this);
console.log(this===window)
this.alert("hello")

function a(){
    console.log(this);
}

a();

const object4 ={
    a: function (){
        console.log(this);
    }

}

object4.a();


// this will still evoke the window because that is the object enviroment

/*
'this'  is what is the object enviroment we are at the moment, the best 
way to think about this is what is 'left' of the dot

// instantiation 

*/

class Player{
    constructor(name,type){
        console.log("player",this)   //shows Player Object 
        this.name=name;
        this.type=type;
    }

    introduce(){
        console.log (`hi i am"${this.name},I'm a ${this.type}`);
    }
}

class Wizard extends Player{
    constructor(name, type){ 
        super(name, type)   
        console.log("wizard",this)  //shows Wizard Object
    }
    play(){
        console.log(`WEEEEE I'm a ${this.type}`);

    }
}

const wizard1= new Wizard (" Shelly","Healer");
const wizard2= new Wizard (" Shawn","Dark Magic user")

wizard1.play();
wizard2.introduce();
wizard2.play();


// constructor create the properties 