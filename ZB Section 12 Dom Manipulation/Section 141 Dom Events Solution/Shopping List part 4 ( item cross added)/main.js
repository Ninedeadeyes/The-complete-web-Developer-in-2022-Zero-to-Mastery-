let enterButton=document.querySelector("#enter");
let input=document.querySelector("#userInput");
let ul= document.querySelector("ul"); 
let listItems = document.querySelectorAll("li");


function inputLength(){
    return input.value.length;
}

function toggleDone(){
	this.classList.toggle("done");
}

function createListElement(){

    let li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));   // attach text node to the element 'li' 
    ul.appendChild(li);                                     // attach li under ul
    li.addEventListener("click", toggleDone);
    input.value="";  // make the input blank 
    

}

for (let i = 0; i < listItems.length; i++) {
	listItems[i].addEventListener("click", toggleDone);
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


