let item = document.querySelector("ul#list>li:last-child")
console.log(item.innerHTML)

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son oge degistirildi..."
console.log(lastChild.innerHTML)

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "ilk oge degistirildi..."
console.log(firstChild.innerHTML)

let ulDOM = document.querySelector("ul#list")
console.log(ulDOM.innerHTML)
//we create new option and we add list the end
let liDOM = document.createElement('li')
liDOM.innerHTML = "kendimiz oge oluşturuyoruz1"
console.log(liDOM.innerHTML)
//prepend add list the begin
ulDOM.prepend(liDOM)


let liDOM2 = document.createElement('li')
liDOM2.innerHTML = "kendi ogemizi oluşturuyoruz 2"
// append add list the end
ulDOM.append(liDOM2)