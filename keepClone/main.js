const menu = document.querySelector(".menu")
const aside = document.querySelector("aside")
const taskTakerInp = document.querySelector(".add-task")
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


// aside.addEventListener("mousemove", (e) => {
//     // console.log(e.target);
//     const elem = Array.from(e.target.classList)
//     console.log(elem);

//     if (!asideToggle) {
//         return;
//     }

//     if (elem.includes("items") || elem.includes("sidebar-icon-data")) {
//         aside.style.width = "40vh"
//     } else {
//         aside.style.width = "10vh"

//     }

// })


taskTakerInp.addEventListener("focus", function () {
    // alert(45)
    document.querySelector(".task-add-inp").style.height = "100px"
})

document.addEventListener("click",function(e){
    console.log(e.target);
})