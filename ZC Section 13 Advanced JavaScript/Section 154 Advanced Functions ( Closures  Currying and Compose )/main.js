

 /*Closures

// Child scope will have access to parent Scope but parent Scope don't have
 access to Child Scope

 a function ran, the function executed. it's never going to execute again 
but its going to remember that there are references to those variables so the 
child scope always have access to the parent scope. 

so "second" function will have access to its parents variables. eg: greet.. Even though 
'first" function will not be run again, the second function will still evoke 'hi' 

*/


const first=() =>{
    const greet="hi";
    const second =() =>{
        alert(greet);
    }
    return second;
}

const newFunc= first();
newFunc();

/*Currying 

The process of converting a function that takes mulitply arguments to a function 
that takes it one at a time 

*/

const mutliply =(a,b)=> a*b;
const curriedMulti =(a)=>(b)=>a*b;
const curriedMinus =(a)=>(b)=>a-b;
const x3=curriedMulti(3);
const m3=curriedMinus(3);    // a becomes 3 


console.log(x3(4));
console.log(x3(5));
console.log(m3(1));     // b  becomes 1 

// Why ?  Because it makes things more effective/extensive for example if you just 
// wants to times something by 3  you can do something like 
//const mb=curriedMulti(3);  and then mb(4) which is 4x3 
//const mb=curriedMulti(3);  and then mb(5) which is 5x3 
// good to avoid repeat.. 


/* Compose Act of putting two function together into a third function where the 
output of one function in the input of another. 

*/

const compose=(f,g)=>(a)=>f(g(a)); 

const sum=(num)=> num+1;

compose(sum,sum)(5); 

// provide 7 

/* break down 

const compose=(f,g)=>(a)=>f(g(a)); 

parameter f and g ( in light blue) 

returns a function that has the parameter 'a'

that returns a function of f(g(a));

f and g are both functions  ( in yellow ) 

f and g are both 'sum' functions  and a is 5  eg: sum(sum(5))

const compose=(f,g)=>(a)=>sum(sum(5)); 

"f" will first run  which will evoke 'a'=5

and it will run "g" ( inner function)

sum is the function that will just add one to the number 

so at that point 5+1 which equate to 6 so it will 
and then sum is ran again for 'f' function which add another 
to 6 hence it become 7. 

*/

// Avoid side Effects, functional purity, 


let a=1

function b(){
    a=2;
}

// this is a side effect, try to think function as their 
// own universe. Good practise to avoid these and it is 
// called functional purity. 

// Want to avoid side effect and want to return a value 

// We create something called Deterministic 
// No matter what whatever  my input it always return 
// the same value 

