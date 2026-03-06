// Q- Number Of Times "day" word Appears In The Given String ?
var day = "sunday"
console.log(day + " Is Funday")
var Message = day + " Is Funday and its a happyday lusuday"
console.log(Message.match("day"))
console.log(Message.length)
var count = 0
for (var i = 0; i <= Message.length; i++) {
    var j = 0
    var k = 0
    if (Message.charAt(i) == "d") {
        j = i
        j++
        if (Message.charAt(j) == "a") {
            k = j
            k++
            if (Message.charAt(k) == "y") {
                count++
            }

        }
    }

}

console.log("The Total Number Of Times day word appers is " + count)