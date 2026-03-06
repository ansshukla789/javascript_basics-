var user_name = "JamesBond  "
console.log(user_name.length) // length of string 
console.log(user_name.slice(0, 5))
console.log(user_name[3])
var split = user_name.split("s") //  split the string on the basis of s and store that splitted strings on array 
console.log(split[1])// array of 1 index 
console.log(split[0])// array of 0 index 
console.log(split[1].length)
console.log(split[1].trim().length) // delete the extra spaces from begining and end 
console.log("***********************************************************************")

// Substracting Two String Values 
var Date = "25"
var New_Date = "28"
var diff = parseInt(New_Date) - parseInt(Date) // Converting string to numbers and doing substraction 
console.log(diff)
console.log(diff.toString())// converting back to string 



