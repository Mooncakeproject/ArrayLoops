// You are provided with a function that takes an array of numbers and returns 
// a new array with each number doubled.
// However, this function currently uses a for loop.
// Your task is to refactor this function to use the map() method instead.

function doubleNumbers(arr) {
    const doubled = arr.map(n => n * 2)
        return doubled;
    }