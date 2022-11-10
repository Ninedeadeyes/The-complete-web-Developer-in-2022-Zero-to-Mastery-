//BigInt
// Nullish Coalescing operator  ?
// Optional Chaining operator  ??


//BigInt  ( A new type just like boolean and numbers  )

typeof 3

typeof 43243243242342332566456546545465

typeof 1n  // provide a type of Bigint 

typeof BigInt

// Javascript has something call MAX_SAFE_INTEGER
// After a certain limit calculations start to break down  (9007199254740991) 
// (limit to information how much we can store in memory)

// BigInt solve this issue 

//eg 

Number.MAX_SAFE_INTEGER


Number.MAX_SAFE_INTEGER+10  // do not provide right answer 

// do not provide right answer but can do 

9007199254740991n+10n


// Nullish Coalescing operator  ?

let willPokemon={
    pikachu:{
        species:"Mouse Pokemon",
        height:0.4,
        weight: 6
    }

}

let andriePokemon={
    raichu:{
        species:"Mouse Pokemon",
        height:0.8,
        weight: 30,
        power:""
    }

}


// The below code will evoke an error hence we can use
// the below 'if' statement to instead evoke an 'undefine 

// let weight=willPokemon.pikachu.weight;
// console.log(weight);

// let weight2=andriePokemon.pikachu.weight;
// console.log(weight);


// so instead of doing the below 

if (andriePokemon.pikachu && andriePokemon.weight){
    let weight3=andriePokemon.pikachu.weight
    console.log(weight3)
}

else{

    let weight3=undefined;
    console.log(weight3);
}


// we can do this instead as it is much more efficient. 
// if use another object for example willPokemon will have 
// to use &&

let weight4=andriePokemon?.pickahu?.weight
console.log(weight4);


//Optional Chaining operator  ??

// Can be used instead of 'OR 

// if

let power=andriePokemon?.pickahu?.power||"no power";

console.log(power)   // provide no power 



// The issue with OR (||) if there is an empty string for 
// power it will say 'no power' rather than undefine 

// with ??  it will see if its 'null' or undefined 

let power2=andriePokemon?.pickahu?.power??"no power";

console.log(power2)   // provides undefine 


