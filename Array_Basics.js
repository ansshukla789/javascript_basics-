var marks = Array(6)
var marks = new Array(10, 20, 30, 40, 50)
console.log(marks)
var marks = [10, 20, 30, 40, 50, 60]
submarks = marks.slice(2, 5) // creating subarray from main array
console.log(submarks)// [30, 40, 50]
console.log(marks[3]) // returning the data which is  present on index 3
marks[3] = 100 // Replace the value which is present at index 3 with 100
console.log(marks)
console.log(marks.length) // returning the length of array 
marks.push(500) // Adding the value at the end of array 
console.log(marks) //[10, 20, 30, 100, 50, 60, 500]
marks.pop()// removing the value from end of array
console.log(marks)// 10, 20, 30, 100, 50, 60]
marks.unshift(5)// Adding the value in the begining of array 
console.log(marks)// [5, 10, 20, 30, 100, 50, 60]
console.log(marks.indexOf(100)) // returning the index of particular value 
console.log(marks.includes(53)) // checking if 53 present in array or not give output as true or false 
for (var i = 0; i < marks.length; i++) {
    console.log(marks[i])
}
