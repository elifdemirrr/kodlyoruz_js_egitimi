let price = "90"
let user ="guest"

// eşitse 
console.log("== :", price == 1)
console.log(" == :", price == 90)

//hem değeri hem de türü eşitse yani denkse
console.log(" === :", price ===1)
console.log(" === : ", price ===90) //çünkü denk olabilmesi için type nin da aynı olması lazım olmadığı için false döndü.

//Eşit değilse
console.log(user != "guest")
console.log(user == "guest")
console.log(user === "guest")

user = "elif"
console.log(user === "guest")

//Küçükse
console.log(" < :", price < 80)
console.log(" < :", price < 100)

//Küçük eşitse
console.log(" <= :", price <= 90)

//Büyükse 
console.log(" > :", price > 70)
console.log(" > :", price > 100)

//Büyük eşitse
console.log(" >= :", price >= 90)

// &&  (ve)
console.log(price > 1 && user == "guest")
console.log(price == 90 && user == "elif")

// || (veya)
console.log(price > 1 || user == "ali")

// != (değilse)
console.log(price != 10 && user != "xldg")
console.log(price == 90 || user != "elif") // !!!!!!!