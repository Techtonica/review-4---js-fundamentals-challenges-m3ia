// Write a function below that accepts a number as the only argument.	

// The function should determine whether the number is divisible by 3,	
// and return either true or false.
// Choose names that make the code easy to understand.
//
// Note:  None of the review # problems have tests included, but feel free to write your own.


// 1. write a function that takes a num
// 2. determine if num is div by 3
// 3. return boolean. 


/* Meia's trial space */ 
function divBy3 (num) {
  return (num % 3 === 0);
}

// trial lines:
// console.log(divBy3(3)); // true
// let testCases = [3, -3, 10, 0, 33333333] // [true, true, false, true, true]
// console.log(testCases.map(divBy3)); 

