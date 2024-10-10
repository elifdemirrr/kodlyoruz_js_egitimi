
// array to created
let items = [10, 20, 30, 40, ]
console.log("ilk oluşturulan items:", items)

// İf we want to add item end of the array we will use the push method

items.push(500)
console.log("sona eklenen eleman:", items)

//İf we want to add an item to the beginning of the array we will use the unshift method
items.unshift(1)
console.log("başa eklenen eleman:", items)

//İf we want to take item end of the array off we will use the pop method // phrabsal verb var take off
//But first step: we have to get lastitem and we  one assignassign variable
//But first step: we have to get lastitem and we  assign to variable

//ilk kurduğum cümle doğru olan arasındaki fark
let lastitem = items.pop()
console.log("son eleman:", lastitem, "yeni items", items)

let firstItem = items.shift()
console.log("firstItem:", firstItem, "items:", items)

items[0] = 5;
console.log("ilk elamanın değiştirilmesi", items)

items[items.length-1] = 350
console.log("son elemanın degiştirlmesi", items)

items[20] = 20000
console.log("deneme", items)