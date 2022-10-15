let enterButton=document.querySelector("#enter");
let input=document.querySelector("#userInput");
let ul= document.querySelector("ul"); 


function inputLength(){
    return input.value.length;
}


function createListElement(){

    let li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));   // attach text node to the element 'li' 
    ul.appendChild(li);                                     // attach li under ul
    input.value="";  // make the input blank 

}

enterButton.addEventListener("click",function(){
    if (inputLength()>0){
        createListElement()
    }

})


input.addEventListener("keydown", function(event){

    if(inputLength()>0 && event.code==="Enter"){
        createListElement()
    }
    
});


