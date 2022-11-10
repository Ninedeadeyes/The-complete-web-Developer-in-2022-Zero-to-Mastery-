// stringpadding  aligning 

let start="Turtle".padStart(10); // 10 spaces in front 
let end="Turtle".padEnd(10);     // 10 spaces after it 

console.log(start);
console.log(end);


/*Trailing commas (final commas) in function parameter lists and calls  

If you want to add a new property, you can add a new
line without modifying the previously last line if 
that line already uses a trailing comma. 

*/

const fun=(a,b,c,d,) =>{
 console.log(a);
}

fun(1,2,3,4)

/*
First, rearranging items is simpler,
because you don’t have to add and remove commas if
the last item changes its position.

Second, it helps version control systems with 
tracking what actually changed. For example, going from:

[
    'foo'
]
to:

[
    'foo',
    'bar'
]

*/


//Object.values and Object entries 


// before we had Object.keys 

let obj={

    username0:"Santa",
    username1:"Rudolf",
    username2:"Mr.Grinch"

}

Object.keys(obj).forEach((key,index)=>{
    console.log(key,obj[key]);
})

//NOW Much more simple 

Object.values(obj).forEach((value)=>{
    console.log(value);
})     // print just the value 

Object.entries(obj).forEach((value)=>{
    console.log(value);

})   // print both key and value, can you use all 'array' functions like map,filter
     // entries convert an object into an array. 

//example : 

Object.entries(obj).map(value=>{
    return value[1]+value[0].replace("username", "")
})

