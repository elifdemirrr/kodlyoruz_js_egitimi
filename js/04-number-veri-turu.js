let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax
console.log(
    "Fiyat:", price,
    "KDV Orani:", tax,
    "KDV Tutari:", priceTax,
    "Toplam:", total 
)

// I dont understand COMPLETELY, I will look return
let stringNumber = "11"
console.log(stringNumber)
let newNumber = Number(stringNumber)
console.log(newNumber)
console.log("Number Constructor icine bilgi gonderildi:", Number("111")) 


let counter = 270
counter = counter +1 
counter -= 1;
console.log(counter)

counter --;
counter -= 2;
console.log(counter)

counter *= 10
console.log(counter)

counter /=3
console.log(counter)


//islem onceligi(like the maths, ı think)
console.log(3+7*10)
console.log((3+7)*10)
console.log(0*(10-3))

//Mod alma (kalan bulma) we use this sign(mark) --> %
//WE find the number type forexample odd and even with this subject
console.log(10%2) // kalana göre sayının tek mi çift mi olduğunu anlayabiliyoruz.
//Forexample. I have a package and I want to put chocaclate into the package. And I make a this sentences, for this reason I am happy :)
//But this package take just 8 piece chocaclate and look, does package take my all chocaclate ?
console.log(25%2) //result = 1 , I am sad Unfortunately doesn't take ((it couldn't get it)than better)  
console.log(12%2) //it's okey 

//exponentiation operations in maths
console.log(2 * 2 * 2 * 2) 
console.log(2 ** 4)
//ROUNDİNG OPERATİONS
//rounding down
console.log("Aşağı yuvarlama",Math.floor(1.9)) //result=1
console.log("Aşağı yuvarlama2",Math.floor(1.3)) //result =1
console.log("Aşağı yuvarlama3",Math.floor(1.5)) //result =1

//rounding up
console.log("yukarı yuvarlama",Math.ceil(1.9)) //result=2
console.log("Yukarı yuvarlama2",Math.ceil(1.2)) //result =2
console.log("Yukarı yuvarlama3",Math.ceil(1.5)) //result =2
//rounding close
console.log("yakına yuvarlama",Math.round(1.4)) //result =!
console.log("yakına yuvarlama2",Math.round(1.9)) //result=2
console.log("yakına yuvarlma3",Math.round(1.5)) //result=2

