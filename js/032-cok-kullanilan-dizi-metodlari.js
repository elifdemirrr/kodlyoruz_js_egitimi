
let items = [1, 2, 3, 4, 5]

let womanUsers = ["Elif", "Elo", "Elocans"]

let manUsers = ["Demir", "Hasan", "Ali"]

items.unshift(womanUsers) //başa eklendi

items.push(manUsers) //erkekler sona eklendi

console.log(items.length)
console.log("bu neymiş merak ettim",items[0].length) // 1. itemin sahip olduğu uzunluk
console.log(items[0][0]) //iç içe dizideki elemanı öğrenmek için.

let newItems = items.splice(1,5)
console.log("newItems", newItems) //arrayden bir parça oluşturdum istediğim aralıklarda

items.unshift("ELİF")
items.push("DEMİR")
console.log(items)
console.log(items.indexOf("DEMİR")) //İNDEX BİLGİSİ

let copyItems = items
console.log("kopyalanan items dizisi:",copyItems)

copyItems.pop()
console.log("copyItems", copyItems)   //bu yanlışm kopyalama
console.log("items", items)

copySlice = items.slice()
console.log("slice kopylandı:",copySlice)
copySlice.pop()
console.log("Slice kopyalandı sonra pop yapıldı:", copySlice)
console.log(items) //olduğu gibi duruyor

let es6Items = [...items]
console.log("es6 ile kopylama:", es6Items)

// es6 ile hem kopyalama hemde birleştirme işlemini gerçekleştiriyoruz.
let allUsers = [...womanUsers, ...manUsers]
console.log("es6 ile birleştirme:", allUsers)

