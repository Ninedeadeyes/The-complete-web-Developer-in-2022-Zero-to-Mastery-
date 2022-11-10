const basket=["apple","orange","grapes"]

const detailedBasket={
    apple:5,
    oranges:10,
    grapes:1000
}

// for loop
for(let i=0; i<basket.length; i++){
    console.log(basket[i]);
}

// for Each 
basket.forEach(item=>{ 
    console.log(item);
})

// for of   (ES6)
// Iterating mean to go one by one and look at 
// They are called the Iterables  - arrays and strings
// This don't work with objects. 


// array 
for(item of basket){
    console.log(item);
}

// string 
for(item of 'basket'){
    console.log(item);
}


// for in  ( Use for Objects )
// enumerating-objects 

for (item in detailedBasket){
    console.log(item)
}

// with an object it is called enumerating 



// for in will work for arrays but for of doesn't work for object 



for (item in Basket){
    console.log(item)
}

/*
// provide 
// 0
// 1
// 2

because underneath the hood  array is like an object 

hence you can think of the array as 


basket={
    0:"apple",
    1:"oranges",
    2:"grapes"
}


Can potentially not use for in loops and use
object.keys()  or object.entries good to know the difference 

*/ 







