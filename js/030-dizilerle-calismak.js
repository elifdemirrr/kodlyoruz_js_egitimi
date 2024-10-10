
let domain = "kodluyoruz"
let isActive = false
let items = [15, 25, 35, isActive, domain] // array to created
console.log(items)

let emptyArray  = [] // boş liste

console.log(
    items.length  // I learned inside the array items number
)

// document.querySelector('#info').innerHTML = items.length  // I wrote the doc items number

// Array icindeki ilk elemanin cagirilmasi indeklerle çağırabiliyor
console.log( items[0] )

// Array icindeki son elemanin cagirilmasi //  (n-1) matematikte ki mantığı
console.log( items[items.length - 1] )

// Array icindeki ortadaki elemanin cagirilmasi
console.log(
    "ortadaki :",
    items[ Math.floor(items.length / 2) ]
)

// degisken icindeki bilginin Array olup olmadiginin kontrol edilmesi
console.log(
    typeof(items) // object olarak cikti veriyor
)

console.log(
    Array.isArray(items)
)

// hangileri isArray -> True verir ? 

console.log("[] : ", Array.isArray( [] ) ) //true 
console.log("1 : ", Array.isArray( 1 ) )  //false
console.log("true : ", Array.isArray( true ) ) //false
