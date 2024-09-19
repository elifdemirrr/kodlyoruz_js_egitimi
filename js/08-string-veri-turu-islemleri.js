let email = "elifdemir@gmail.com"
let firsName = "Elif"
let lastName = "Demir"
console.log(firsName.toLocaleUpperCase())

//string character number
console.log(email.length)

//finding the first character
console.log(firsName[0])
console.log([firsName.charAt(0)])

//Chancing the uppercase
// console.log(firstName.toUpperCase()) burda uppercase yapmıyor ama yukarıda yapıyor
firstName = firsName.toUpperCase()
console.log(firsName)

//Chancing the lowercase
firsName = firsName.toLowerCase()
console.log(firsName)

//Fiding the requested information, like the search
console.log(email.search("@"))
console.log(email[15])
console.log(email.search("x")) //olmayan karakteri arattığım için -1 getirdi.

//if we want to divide the place we want we used the slice function
let DOMAIN = email.slice(email.search("@") + 1) //+1 dersek seçtiğimiz ifadeden sonrasını alırız.
console.log(DOMAIN)

console.log(DOMAIN.slice(0, DOMAIN.indexOf('.'))) //indexof da istediğimizi bulmamıza yardımcı olur.

//we chancing the want data sometimes
email = email.replace('gmail.com', 'hotmail.com')
console.log(email)

//Is there I want data, we look sometimes, we use the includes funciton this sitition, like the boolean value
email = email.includes("gergeg")  // returned the false if I write "@" returned the true
console.log(email)

// Was it started with the information I requested?
// email = email.endsWith('hotmail.com')  // hata verdi uncaught typerror direkt konsoldan yazınca da hata verdi
// console.log(email)

let fullName = `${firsName[0].toUpperCase()}${firsName.slice(1).toLocaleLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLocaleLowerCase()}`
console.log(fullName)