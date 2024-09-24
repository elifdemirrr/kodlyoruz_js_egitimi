let greeting = document.querySelector("#greeting")
greeting.classList.add("text-primary")
greeting.classList.add("title")
greeting.classList.add("elo", "elif", "elocans") //adding class more than one

greeting.classList.remove("elo", "text-primary", "elocans") //deleting class more then one

console.log(greeting.classList)