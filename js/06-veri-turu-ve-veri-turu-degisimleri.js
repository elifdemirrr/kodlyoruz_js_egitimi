let price = 111
let stringPrice = "111"
let hasPassword = true

console.log(
    "price",
    typeof(price)
)
console.log(
    "stringPrice",
    typeof(stringPrice)
)
console.log(
    "hasPassword",
    typeof(hasPassword)
)

//Converting the string data type to Number data type
let number1 = "11"
number1 = parseInt(number1)
console.log("number1", number1, typeof(number1))

let number2 = "11pc"
number2 = parseInt(number2)
console.log("number2", number2, typeof(number2))
// attentionnn attention attention if I use parseInt, the number returns but I use Number , Nan the returns
let number3 = "11pc"
number3 = Number(number3)
console.log("number3", number3, typeof(number3))

let number4 = "11.1"
number4 = Number(number4)
console.log("number4", number4, typeof(number4))

let number5 = "11.1"
number5 = parseFloat(number5)
console.log("number5", number5, typeof(number5))

//Converting the number data type to string data type 
let number6 = 66
number6 = number6.toString()
console.log("number6", number6, typeof(number6))