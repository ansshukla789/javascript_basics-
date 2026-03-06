// Type 1
function add(a, b) {  // function is a keyword add is the function name 
    return a + b// function add is returning sum 
}
let sum = add(2, 3)// function call
console.log(sum)

// Type 2
//do not have name ->Anyonymus---> Function expression

let result = function (c, d) {
    return c + d

}
console.log(result(5, 6))

//Type 3
let sum3 = (c, d) => c + d  // fat pipe 
console.log(sum3(7, 9))