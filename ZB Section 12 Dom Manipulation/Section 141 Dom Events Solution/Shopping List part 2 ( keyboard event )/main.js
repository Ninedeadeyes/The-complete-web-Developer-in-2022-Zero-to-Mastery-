let enterButton=document.querySelector("#enter");
let input=document.querySelector("#userInput");
let ul= document.querySelector("ul"); 



enterButton.addEventListener("click",function(){
    if (input.value.length>0){
        let li=document.createElement("li");
        li.appendChild(document.createTextNode(input.value));   // attach text node to the element 'li' 
        ul.appendChild(li);                                     // attach li under ul
        input.value="";  // make the input blank 

    }

})


input.addEventListener("keydown", function(event){

    if(input.value.length>0 && event.code==="Enter"){

        let li=document.createElement("li");
        li.appendChild(document.createTextNode(input.value));   // attach text node to the element 'li' 
        ul.appendChild(li);                                     // attach li under ul
        input.value="";  // make the input blank 
    }

    
});


// enterButton.addEventListener("click", function(){

//     if (input.value.length>0){
        
//         let li=document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value="";
//     }

// });

// input.addEventListener("keydown", function(event){
//     if (input.value.length>0 && event.code==="Enter"){
        
//         let li=document.createElement("li");
//         li.appendChild(document.createTextNode(input.value));
//         ul.appendChild(li);
//         input.value="";
//     }

// });

