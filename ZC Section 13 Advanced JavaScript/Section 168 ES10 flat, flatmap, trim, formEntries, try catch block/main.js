
//flat= flatten nested arrays.


const array=[1,[2,3],3,[4,5]]

const array2=[1,[2,3],3,[4,[5]]]


array.flat();

// [1, 2, 3, 3, 4, 5]

array2.flat();

// [1, 2, 3, 3, 4, Array(1)]

// you can tell how many layers, the default is 1 

array2.flat(2);

// [1, 2, 3, 3, 4, 5]

// you can randomly high argument to flat complicated nesting  eg: array2.flat(50);

// Flat can also clean up data  ( not particularly useful but I least i know )

const entries=["bob","sally",,,,,,"cindy"]

entries.flat();


//flatMap()  

//Use flat and Map on an array. You flat first then Map 
// only flatten it to a depth of one. 

const array4=[1,[2,3],3,[4,[5]]];

const array3=array4.flatMap(number=>number+"hello");

array3;


//trim remove blank spaces either at start or end 

const userEmail1="        bob@hotmail.do"
const userEmail2="fdsfsdfsd.oms        "

console.log (userEmail1.trimStart());
console.log (userEmail2.trimEnd());

//formEntries   Convert an array into an Object 
// Rem in ES8 we use entries(obj) which does the opposite 

userProfiles=[["Mario",23],["zelda",34],["hansel",34]]

Object.fromEntries(userProfiles);

// try  catch block 

// try a piece of code and if there is error, it will catch them 

try{
bob+"hi"
} catch{

    console.log("you messed up");

}
