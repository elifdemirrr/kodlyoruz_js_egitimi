//This is What I understand ;
//string expressions and variable used the together

let userName = "Elif"
const DOMAIN = "elifdemir.com"
let email = userName + "@" + DOMAIN

console.log("Merhaba", userName, "sitemize hoşgeldin", "mail adresin:", email)


let info = `
Merhaba ${userName} sitemize hoşgeldiniz.
Mail adresiniz ${DOMAIN}.

Mail adresinizin uzunluğu: ${email.length}
Borcunuz: ${(2+5)*(1-2)} TL.
Güncel tarih ve saat: ${new Date()}
Nicknameniz: ${userName.slice(0,2) + "o"} 
` 
console.log(info)
//I maked a nickname, I tried a new way. Different than video