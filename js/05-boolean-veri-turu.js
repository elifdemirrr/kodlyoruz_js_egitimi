//şimdi ilk başta boolean değerleri tanımlarken is ve has kullanılır ,
//ingilizceden yola çıkılarak is there sorusu var mı demektir ve has ise 
//(he,she,it)için sahiplik olarak kullanılır.Sahip mi gibisinden sormak için...
let isActive = false
isActive = true
isActive = false
console.log(isActive)

let userName
let isUserName = Boolean(userName)
console.log(isUserName)

userName = "user"; //true
console.log("userName", Boolean(userName))

userName = "0"    //true
console.log(Boolean(userName))

userName = "-0.1"    //true
console.log(Boolean(userName))

/////////is important
userName= ""  //false
console.log(Boolean(userName))

userName = 0   //false
console.log(Boolean(userName))

userName = 0.1   //true
console.log(Boolean(userName))

userName = -0.1   //true
console.log(Boolean(userName))

Boolean(0 === 0) // true dönermiş karar yapıları ile alakalı
Boolean(userName.length > 0) //true
console.log(Boolean(userName)) //true döndü, if çalışıyor anlamına geliyor.