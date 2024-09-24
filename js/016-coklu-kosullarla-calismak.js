let userName = prompt("Kullanıcı Adınızı Giriniz:")
let age = prompt("Yaşınızı Giriniz:")
let kosulInfo = document.querySelector("#kosul-info")
if(userName.length > 0 && age >= 18){
  console.log(`Merhaba ${userName} , yaşınız(${age}) uygun olduğu için ehliyet almaya hak kazandınız `)
}
else if(!userName){
console.log("Kullanıcı adınızı griiniz ve yaşınız tutmuyor")
}
else if(!(age))
{
    console.log("yaşınız küçük")
}
else {
    console.log("Aferin, güzel gidiyor!")
}
//   console.log(`Merhaba ${userName} , yaşınız(${age}) uygun olduğu için ehliyet almaya hak kazandınız `)
