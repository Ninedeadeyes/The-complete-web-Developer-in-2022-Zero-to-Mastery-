const flattened=[[0,1],[2,3],[4,5]].reduce((a,b)=> a.concat(b),[]);

//step 1 explain each step and what each component does

const flattened1=[[0,1],[2,3],[4,5]].reduce(
    (accumlator,array)=> accumlator.concat(array),[]);    

//step 2 break it down to multiple lines by adding 
// {} and return as well as console log each element 


const flattened2=[[0,1],[2,3],[4,5]].reduce(
    (accumlator,array)=> {
    console.log("array",array);
    console.log("accumlator",accumlator);
    return accumlator.concat(array)
    },[]);   




// can also use 'debugger'

// which will freeze where ever you have put it 
// click 'play' to contine the entire thing or 'step over' where it goes 
// to the next line ( like how it does console.log) 
//step over you can see how the parameter change with each loop  



const flattened3=[[0,1],[2,3],[4,5]].reduce(
    (accumlator,array)=> {
    debugger;
    return accumlator.concat(array)}, []);   
    

const flattened5=[[0,1],[2,3],[4,5]].reduce(
    (accumlator,array)=> {
    debugger;
    return accumlr.concat(array)}, []);   

// grabbing each  nested 'array' into the accumlator then concatenate 
// it in one array. eg : accumlator.concat(array)