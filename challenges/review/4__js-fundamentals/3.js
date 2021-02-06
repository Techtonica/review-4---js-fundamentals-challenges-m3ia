// 1. Create an array of numbers, (ex: [1, 2, 3])
// 2. Without using any math operators, write 5 statements:
//   - Return the first item in the array (ex: 1)
//   - Return the last item in the array (ex: 3)
//   - Add a new item to the end of the array (ex: [1,2,3,4])
//   - Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
//   - Return the first item from the first item in the array. (ex: "a")

// Create an array of numbers, (ex: [1, 2, 3])
let numArr = [1, 345, 0, -123, 9, 50];

// Return the first item in the array (ex: 1)
console.log(numArr[0]); // 1 

// Return the last item in the array (ex: 3)
console.log(numArr[numArr.length-1]); // 50 

// Add a new item to the end of the array (ex: [1,2,3,4])
numArr.push([1, 2, 3]);

console.log(numArr); // [1, 345, 0, -123, 9, 50, [1, 2, 3]]

// Add an array to the beginning of the array. (ex: [["a","b","c"],1,2,3,4])
numArr.unshift([7, 8, 9]); 

console.log(numArr); // [[7, 8, 9], 1, 345, 0, -123, 9, 50, [1, 2, 3]]

// Return the first item from the first item in the array. (ex: "a")
console.log(numArr[0][0]); // 7 