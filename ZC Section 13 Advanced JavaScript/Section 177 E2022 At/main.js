//at()

// useful for arrays and strings 

const arr=[100,200,400,5000,10];

// If ask to get item second to last what would you do ?

arr[arr.length-2]   // length is 5 -2  is 3  so 0,1,2,3 index is 5000 

// can use instead

arr.at(-2);    
arr.at(-1);   // last item of array 

