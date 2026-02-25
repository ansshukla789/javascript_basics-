console.log("Hello To Javascript")// Console.log is same as System.out.println() in java it is used to print whatever you want 
const a = 4/* In Javascript it does not required datatypes like int string etc in runtime it automatically what type of data it is 
For defining it is a variable we use const ,var ,let */
var b = 5
let c = 6
const d = 678.67
const stname = "Anshul Shukla"
const flag = true
console.log(a)
console.log(b)
console.log(typeof (c))// typeof is used to tell what kind of datatype of variable 
console.log(typeof (d))
console.log(stname)
console.log(flag)
console.log(typeof (stname))
console.log(typeof (flag))
// null and undifined are two more datatypes in javascript 
const result = a + b
console.log(result)
//let c=a+b
//We Can Not Redeclare Variable With let Keyword But Possible with var keyword
c = a + b// Reassigning is possible with let also 
//d = a + b// we cannot reassign/redeclare const variable 
console.log(!flag)
console.log(c)
console.log(d)
