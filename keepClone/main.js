const menu = document.querySelector(".menu")
const aside = document.querySelector("aside")
let asideToggle = false;


// 🔥🔥🔥 Replace the logo according to the active sidebar link.


menu.addEventListener("click", () => {

    if (asideToggle === false) {
        aside.style.width = "10vh"
    } else {
        aside.style.width = "40vh"
    }

    asideToggle = !asideToggle
})

