let css=document.querySelector("h3");
let color1=document.querySelector(".color1");
let color2=document.querySelector(".color2");
let body=document.querySelector("#gradient");

body.style.background="red";

function setGradient(){
    body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")"

    css.textContent=body.style.background+";";
}

// There are many ways to add things to the DOM textContent is another way
// innerHtml 

// Can use 'oninput' in html for example :  <input oninput="setGradient()"  class="color2" 
// but not as flexible as you can only do one thing as addEventListener 

color1.addEventListener("input",setGradient)

color2.addEventListener("input",setGradient)



// before refactoring 

// color1.addEventListener("input",function(){
//     body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")"
// })

// color2.addEventListener("input",function(){
//     body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")"
// })