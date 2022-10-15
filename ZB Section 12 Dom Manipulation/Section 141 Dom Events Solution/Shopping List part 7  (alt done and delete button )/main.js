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



function removeParent(event){
	event.target.parentNode.remove();
} 

function deleteButton(){
	let delBtn = document.createElement("button");
	delBtn.appendChild(document.createTextNode("Delete"));
	listItems[i].appendChild(delBtn);
	delBtn.onclick = removeParent;
}

function doneButton(){
	let donBtn = document.createElement("button");
	donBtn.appendChild(document.createTextNode("Done"));
	listItems[i].appendChild(donBtn);
	donBtn.onclick = toggleDone;
}




function createListElement(){

    let li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));   // attach text node to the element 'li' 
    ul.appendChild(li);                                     // attach li under ul
    li.addEventListener("click", toggleDone);
    input.value="";  // make the input blank 

    let btn1 = document.createElement("button");
	btn1.innerHTML = "Delete";
	btn1.onclick = removeParent;
	li.appendChild(btn1);

    let btn2 = document.createElement("button");
	btn2.innerHTML = "Done";
	btn2.onclick = toggleDone;
	li.appendChild(btn2);
    

}

for (let i = 0; i < listItems.length; i++) {
	listItems[i].addEventListener("click", toggleDone);
}



for( i=0 ; i<listItems.length; i++) { 
    deleteButton();
    doneButton();
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


