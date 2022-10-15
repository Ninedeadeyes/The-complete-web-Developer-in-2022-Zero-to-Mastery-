
let listAnimals=["tiger","cat","bear","bird"];

console.log(listAnimals[1]);


// You can have numbers, booleans and even functions in 
// an array, it an be mixed but not advise. 


// You can make array within an array 

let list=[
["tiger","cat","bear","bird"]
];

// to get cat 

console.log(list[0][1]);


//arrays has a bunch of methods attach to it

listAnimals.shift();   // remove tiger, shift to left
listAnimals.pop();     // remove bird, remove end 
listAnimals.push("elephant");  // add elephant to the end
listAnimals.concat(["bee","deer"])  // combine array to the end 

console.log(listAnimals.sort());   // only 3 items why ? 


// This is because when you concatentate the two lists together 
// you never assigned the 'new array' to a variable hence why 
// it only sorted the original 

newList=listAnimals.concat(["monkey"]) 

console.log(newList.sort());

// Some methods like concat will create new list whilst 
// others like shift will not. 