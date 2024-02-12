// You are given a function that takes an array of numbers and returns a new array containing only even numbers.
// However, this function currently uses a for loop.
// Your task is to refactor this function to use the filter() method instead.

function getEvenNumbers(numbers) {
    const evenNumbers = numbers.filter(number => number % 2 === 0);
        return evenNumbers;
}
    console.log(getEvenNumbers([1,2,3,4,5,6]));