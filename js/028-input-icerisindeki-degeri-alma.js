

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event) {
event.preventDefault() // default olarak işlemi engeller formdaki post ya da get işlemini genelde default olarak get işlemi yapılır.
console.log("işlem gerçekleşti")

let scoreInputDOM = document.querySelector('#score')
console.log(scoreInputDOM.value)
localStorage.setItem('score', scoreInputDOM.value)
}