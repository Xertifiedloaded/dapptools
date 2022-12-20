const hamburger = document.querySelector(".hamburger")
const hide = document.querySelector(".hide")
let isActive = false
hamburger.addEventListener("click", () => {
    if (isActive == false) {
        isActive = true
        hide.classList.replace("hide", "show")
    }
    else {
        isActive = false;
        hide.classList.replace("show", "hide")
    }
})

// 
let slideImg = document.querySelector(".img")
console.log(slideImg)
let images = new Array(
    "assets/images/home_hero.png",
    "assets/images/mobile-1.png",
    // "assets/images/mobile-2.png",
    "assets/images/mobile-3.png",
    "assets/images/mobile-4.png",

)
len = images.length
let i = 0
function showSlide() {
    if (i > len - 1) {
        i = 0
        console.log("hehehehe")
    }
    slideImg.src = images[i]
    i++
    setTimeout("showSlide()", 3000)
    console.log("hehehehe")
}
