
/* Scope ( means variable access)

What variable do I have access to when I am running.
By default you are in the 'root' parent scope  ( The window object)


Global Scope: If we say a variable is available globally, it means that any code on 
our page has access to read and modify this variable 


Local Scope : A variable declared inside a function will not work when accessed outside of a 
function.

Functions has access to variables to the same 'root' scope as itself  but anything in the 'root' scope 
don't have access to any variables that is not within its own scope or within its own local scope. 


Interesting example 
*/ 

// function aa and bb and variable a,b  are within the same parent scope. 
//  aa() has access to the 'variable a' as demonstrate below.

let a="Can I access this?";

function aa(){
    c="hello";
    console.log(a);
}

aa();


let b="Can I access this too ?";

function bb(){
    b="hello";
}

console.log(b);
bb();
console.log(b);

// if you  console.log(b); it will be  'Can I access this too ? ' but then if you 
// run bb() and then console.log(b) it will be 'hello'. Local scopes can change 
// things in the global scope. 

let fun=5;

function funFunction(){      // child scope
    let fun="hello";
    console.log(1,fun);
}

function funnerFunction(){   // child scope
    let fun="Bye";     // If you add 'let', you will lose access to parent variable
    console.log(2,fun);
}

function funestFunction(){   // child scope
    fun="AAARRGGHH";    
    console.log(3,fun);
}


function notFunFunction(){   // child scope
    let fun="BOOOO";    
    console.log(4,fun);
}

// The last check is always 'root scope' but it will always check local scope first 
// hence why adding a 'let' to the variable will not affect the global scope. 

console.log("window",fun)
funFunction();
funnerFunction();
funestFunction();
notFunFunction();
console.log(fun);     


