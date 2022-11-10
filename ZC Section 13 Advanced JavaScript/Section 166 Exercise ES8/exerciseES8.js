// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

turtle = turtle.trim().padEnd(9, '=');
turtle=turtle.padStart(10);
rabbit=rabbit.padStart(10);



// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);



// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');  
'🐢======='   //emjo takes 2 spaces

// pad_string
//  It is the specified string to pad to the end of
//  string. If this parameter is not provided, the padEnd()
//   method will use a space as the pad character.


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

Object.entries(obj).map(value => value.join(" ")).join(' ')

//if you have only one parameter, you can skip the parentheses as well