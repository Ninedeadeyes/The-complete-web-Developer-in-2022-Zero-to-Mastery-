let button=document.getElementsByTagName("button")[0]

button.addEventListener("click", function (){
    console.log("CLICK!!!!")
});

// Can do ton of them aside from 'click' like mouse enter

let enterButton=document.getElementById("enter");
let input=document.getElementById("userInput");
let ul=document.querySelector("ul");

function inputLength(){
    return input.value.length;
}

function createListElement (){
    let li=document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value="";
}

function addListAfterClick(){
    if (inputLength()>0){
        createListElement ();
    }
}

function addListAfterEnter(event){
    if (inputLength()>0 && event.code==="Enter"){ 
        createListElement ();
    }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keydown", addListAfterEnter);

// unfacter 

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



