// You are given a function that is intended to return an array of strings that are longer than 4 characters.
// However, there's a mistake in the implementation of the filter() method.
// Your task is to identify and correct the error in the function.

function getLongStrings(strings) {
    return strings.filter(string => string.length > 4)
}
    console.log(getLongStrings(['Hello','Hola','Ciao']));