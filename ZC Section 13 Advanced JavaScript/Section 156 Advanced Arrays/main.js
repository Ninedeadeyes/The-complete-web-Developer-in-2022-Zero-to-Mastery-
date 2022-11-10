// Advanced array

// Using forEach 

// An Array method that will call a function (call back) one time for each element 
// in an array 

// Simplify things for us.  The call back function is evoked with 3 arguments 
// value, index and object    eg:  foreach(value,index,object )


const array=[1,2,10,16];
const double=[]
const index=[]

const newArray= array.forEach((num,order)=>{       //value and index can be labelled anything  
    double.push(num*2);
    index.push(order+5);

})

console.log(double);
console.log(index);


// map, filter and reduce  ( Most important method in day to day) 

// map 

// loop over each element and return a new array 
// Generally speaking best to use map over ForEach 
// Map  expects a 'return an element' and store the 
// info into a new array ( in this case mapArray) 
// remember the original array remain the same eg: array

const mapArray=array.map((num)=>{
    return num*3
})

console.log(mapArray)


// technically can do this because only single argument 

const mapArray2=array.map(num=>num*3)

console.log(mapArray2)


// filter , this will filter an array and return a new array
// below  loop will filter out any number over 3.  

const filterArray=array.filter((num)=>{
    return num>3;
})

console.log(filterArray);

// reduce 

const reduceArray=array.reduce((accumulator,num) =>{
    return accumulator+num
},0)

console.log("reduce",reduceArray)


// first argument is a call back function
//accumulator=0  ( the second argrument )
// 1st loop accumulator=1 
// 2nd loop accumulator=3  etc
// then it gets coverted to a single value 
// if accumlator is 0 can remove it and 
// first item will be the intiall 
// can also make it more efficient since only have one argument


const reduceArray2=array.reduce((accumulator,num) =>accumulator+num);

console.log("reduce",reduceArray2)


