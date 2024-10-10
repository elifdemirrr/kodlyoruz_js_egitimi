// let counter = 0
let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter')) : 0 //burda da if kullanarak counterda kalan sayıyı tuttuk numbera çevirerek counter sıfırsa sıfırdan devam ettirdik.
let counterDOM = document.querySelector('#counter')
let increaseDOM = document.querySelector('#increase')
let decreaseDOM = document.querySelector('#decrease')

counterDOM.innerHTML = counter

increaseDOM.addEventListener("click", clickEvent)
decreaseDOM.addEventListener("click", clickEvent)

function clickEvent () {
    console.log(this.id)
    this.id == "increase" ? counter +=1 : counter-= 1
    localStorage.setItem('counter', counter) //localstorage set işlemi yaptık
    counterDOM.innerHTML = counter
}