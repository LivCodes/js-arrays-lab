// Question 1
function average(numbers) {
  // Write your code here
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){
    sum += numbers[i];
    if(numbers[i] === []){
        return sum;
}

    console.log(sum);
    
  }
    return sum/numbers.length;
}
average([11,12,13]);

// Question 2
function combineArrays(arr1, arr2) {
  // Write your code here
  let arr3 = arr1.concat(arr2);
  return arr3;
  
}
console.log(combineArrays(["Ann", true, 4], [null, "Reuben"]));


// Question 3
function arrayPlusArray(num1, num2) {
  // Write your code here
  let sum = 0;
  let sum2 = 0;
  
  
  sum += num1[0] + num1[1] + num1[2];
  sum2 += num2[0] + num2[1] + num2[2];
  let total = sum + sum2;
  return total;
  }

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
// Question 4
function abbrevName() {
  //Write your code here
}

// Question 5
function makeTitle() {
  // Write your code here
}

// Question 6
function gimme() {
  // Write your code here
}

// Do NOT touch or write anything below this line
module.exports = {
  average,
  combineArrays,
  arrayPlusArray,
  abbrevName,
  makeTitle,
  gimme
};
