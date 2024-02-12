// Create a JavaScript function named 
// convertToFahrenheit.
// This function will take an array of temperatures 
// in Celsius and return a new array with these 
// temperatures 
// converted to Fahrenheit.
// The conversion formula to use is 
// Fahrenheit = Celsius * 9 / 5 + 32s
// Use the map method.

function convertToFahrenheit(celsius) {
    return celsius.map(celsius => celsius * 9 / 5 + 32)

}
console.log(convertToFahrenheit([15,40,12,5]));