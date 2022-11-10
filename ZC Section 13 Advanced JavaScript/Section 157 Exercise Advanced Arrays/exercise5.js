// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

const alter= [];

const bob= array.forEach((user) => {       //value and index can be labelled anything  
  alter.push(user.username+" !");
  
})

console.log(alter);


//Create an array using map that has all the usernames with a "? to each of the usernames

const mapArray= array.map((user) => user.username+" ?");

console.log(mapArray);


//Filter the array to only include users who are on team: red

const filterArray=array.filter((user)=> user.team==="red");
console.log(filterArray);


//Find out the total score of all users using reduce

const arrayNum = [1, 2, 4, 5, 8, 9];

// (1), what is the value of i?      
// (2), Make this map function pure:


const reduceArray2=arrayNum.reduce((accumulator,num) =>accumulator+num);

console.log("Total",reduceArray2)

const newArray = arrayNum.map((num, i) => {
	return num * 2;
})

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const mapArray3= array.map(user =>{
  user.items=user.items.map(item=>{
  return item+"!"});
  return user;

});

console.log(mapArray3);
