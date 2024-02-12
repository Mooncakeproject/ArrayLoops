// You are provided with a function that is intended to take an array of numbers and return a new array with each number squared.
// However, there's an error in how the map() method is currently being used.
// Your task is to identify the error and correct the code.

function squareNumbers(numbers) {
    return numbers.map (number => number * number)
}
    console.log(squareNumbers([1,2,3,4]));