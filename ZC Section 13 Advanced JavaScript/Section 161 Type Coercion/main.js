// Type Coercion

// When one type is different from another it convert it to the same type 

//  1=="1"
// true 

// 1==="1"
// false 

// happens when you use the double equal sign 

// but 3 equals means compare the value but don't convert hence it is better
// to use 3 equal  ===  because == can be unpredicable and cause a lot of issues 
// in your code 


// happens in other areas like  if statements 

//  if(1){
//      console.log (5)
//  }

// if you run this 5 is logged the reason why is because 1 equates to true 
// whiles if you put 0 it won't run because that eqautes to false. 

// Object.is  ( most likely not see)
// concept of -0 and +0   so   -0===+0  we get true but technically they are different 
// so we have Object.is(-0,+0) we get false. 
// NaN===Nan is false 
// but Object.is(Nan,Nan) you get true. 


