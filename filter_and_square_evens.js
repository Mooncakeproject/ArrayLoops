// Create a JavaScript function named filterAndSquareEvens. This function should take an array of numbers as its input. 
// It should first filter out all odd numbers, and then square each of the remaining even numbers. The function should return a new array with these squared even numbers.

function filterAndSquareEvens(numbers) {
    const evenNumbers = numbers.filter(number => number % 2 === 0)
    return evenNumbers.map (number => number * number)
}   
    console.log(filterAndSquareEvens([1,2,3,4,5,6]));

