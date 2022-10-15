


//For Loop 


let toDos=[ 
    "clean room", "brush teeth", "exercise", "study javascript","eat healthy"

]



let toDosLength=toDos.length;

for( let i=0; i<toDos.length; i++){
   // console.log(toDos[i]+"!");
    //toDos[i]=toDos[i]+"!";
    //toDos.pop();

}

for( let i=0; i<toDosLength; i++){
     //toDos.pop();
 
 }

 //While loop 

let counterOne=0;

 while(counterOne<=10){
    console.log(counterOne);
    counterOne++
 }

let counterTwo=10;

 while(counterTwo>0){
    console.log(counterTwo);
    counterTwo--;
 }


let counterThree=10;

do{
    console.log(counterThree);
    counterThree--;
    
} while(counterThree>0);


// difference betwen do and while is  while loop check conditions first. 

// example when do loop will run when While loop won't 

let counterFour=10;

 while(counterFour>10){
    console.log("While loop",counterFour);
    counterFour--;
 }


let counterFive=10;

do{
    console.log("do loop ",counterFive);
    counterFive--;
    
} while(counterFive>10);

// Majority of the time you will run a while loop. 

// forEach (new in ECMAScript 5)


for( let i=0; i<toDosLength; i++){
     console.log(toDos[i],i);
};


toDos.forEach(function(a){
    console.log(a);
})

toDos.forEach(function(toDos,i){
    console.log(toDos,i);
})

// ForEach and for loops do the same thing but ForEach is more efficient 
// The forEach take an array ( ToDos) and it ask for a augment, ' tell me 
//what you want to do with it which is reprsented in a function.  The function 
// recieve the first augment which is the element in the array'. 
//The second parameter will be the index.    


// Can alternative do this as well 


function logSomething(toDos,i){
    console.log(toDos,i);
}

toDos.forEach(logSomething);


let toDosImportant=[ 
    "clean room!", "brush teeth!", "exercise!", "study javascript!","eat healthy!"

]

toDosImportant.forEach(logSomething);


