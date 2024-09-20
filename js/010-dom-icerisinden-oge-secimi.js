let title = document.getElementById('title')
console.log(title)
title.innerHTML = "Değişen Bilgi"
console.log(title.innerHTML)

let link = document.querySelector("ul>li>a")
console.log(link.innerHTML)

let link2 = document.querySelector("#eliflekodla")
console.log(link2.innerHTML)

link2.innerHTML += " değişti ehehe"
console.log(link2.innerHTML)
link2.style.color = "lightgreen"
link2.classList.add("button")
console.log(link2)

// let deneme = document.querySelector("button")
// console.log(deneme.innerHTML)