const hamburger = document.querySelector(".hamburger")
const hide = document.querySelector(".hide")
console.log(hamburger)
function showMenu(){
hide.classList.replace("hide","show")
console.log("shooooooow")
}
hamburger.addEventListener("click",showMenu)
