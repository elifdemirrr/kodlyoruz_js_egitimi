// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt


let fullName = prompt("Lütfen adınızı giriniz:")
let title = document.querySelector("#title")
title.innerHTML = `${title.innerHTML} <small style="color:red">${fullName}</small>`

//we taked data , we used prompt and We got data using prompt