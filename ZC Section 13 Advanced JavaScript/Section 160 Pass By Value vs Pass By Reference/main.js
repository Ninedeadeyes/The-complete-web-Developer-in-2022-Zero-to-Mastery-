
// primitive type are immutable can't be modify but can 
// completely remove it and replace it with something else 
// This is called pass by value 

// primitive types are passed by value 

let a=5;
let b=a;

b++;

console.log(a);
//5
console.log(b);
//6


// b copy the value of a.. They don't have any connection 


// Objects types are passed by Reference 
  
let obj1={name:"Yao", password:"123"};
let obj2=obj1;

obj2.password="easypeasy"

console.log(obj1);
console.log(obj2);

// both object password has been changed and this is 
// passed by reference. 
// you don't just copy value, instead we are simply
// referencing the object is in memory. 

// good because you are saving memory by referencing 
// one location. 

// but unlike a primitive type, by mistake somebody 
// might change something. 


// another example (array )

let c =[1,2,3,4,5]
let d=c;

d.push("32132132");
console.log(c);
console.log(d);


// they will be the same. 

// There are times when you want to create
// an object without doing this 

let z =[1,2,3,4,5]
let f=[].concat(z); 
f.push("!11111")
console.log(f);
console.log(z);



// object example 

// 


let obj={a:"a",b:"b",c:"c"}
let clone=Object.assign({},obj)
let clone2={...obj}  // spread operator just another way of cloning  
let objAlt=obj;

obj.c=5;
console.log(clone);
console.log(objAlt);

// clone and clone 2 objects are not affected 
//obj2 will be affected 

// but what is object within a object ? 

let objY={a:"a",b:"b",c:{deep:"try and copy me"}};
let cloneY=Object.assign({},objY);

//objY.c=6;
let superClone=JSON.parse(JSON.stringify(objY))

objY.c.deep ="hahahahha";


console.log(objY);

console.log(cloneY);

console.log(superClone);

// as expected with objY.c=6  but with objY.c.deep it will ignore the clone 
// and reference the data this is because it only clone the 1st level ( 
//the memory address in the object but since they had a object within  it 
// had another layer. This is called shallow cloning 

// How do we do deep cloning ?  

// Using JSON.parse ( look at superClone example )





