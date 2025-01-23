//String Manipulation Tool

let str : string = "narayan works at Mindifre"

//function to change to uppercase
const toUpper = (str : string) : string=> str.toUpperCase()
//funtion to change to lowercase
const toLower = (str : string) : string => str.toLowerCase()
//function to find the length of the string
const findLength = (str : string) : number => str.length 
//function to replace certain words in the string
const replaceWord = (str : string, replaceOld : string, newString : string) : string => {
    const strArr = str.split(" ")
    return (strArr.map((val : string) => val === replaceOld ? newString : val).reduce((agg : string, val : string) => agg + val + " ", "")).trim()

} 
//function to count the number of words in the string
const countWord = (str : string, word : string) : number => {
    const wordArr : string[] = str.split(" ")
    return wordArr.reduce((acc : number, val) => word === val ? acc+=1 : acc, 0)
}
//function to reverse a string
const reverseString = (str : string) : string => str.split("").reverse().join("")

//testing
console.log("to convert the string to uppercase -> ")
console.log(toUpper(str))
console.log("to convert the string to lowercase -> ")
console.log(toLower(str))
console.log("to find the length of the string -> ")
console.log(findLength(str))
console.log("to replace words in the given string -> ")
console.log(replaceWord(str, "works", "eats"))
console.log("to count the number of words -> ")
console.log(countWord(str, "works"))
console.log("to reverse a string -> ")
console.log(reverseString(str))
