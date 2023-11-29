const menu = document.querySelector(".menu")
const aside = document.querySelector("aside")
const titleTakerInp = document.querySelector(".add-title")
const taskAddCont = document.querySelector(".task-add-inp");
const taskTakerInp = document.querySelector("#task-inp")
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


titleTakerInp.addEventListener("focus", function () {
    if (window.getComputedStyle(taskAddCont).height === "50px") {
        this.placeholder = "title"
        taskAddCont.style.height = "150px"
        taskTakerInp.focus();
    }

    // taskTakerInp.removeEventListener("focus",function(){},true)
})


// Agar input box ke bahar clcik hua to band karana he else agar kisi bhi same input
// ke element per click hua to band nahi karana he

document.addEventListener("click", function (e) {
    const classList = Array.from(e.target.classList);
    if (!classList.includes("__open__")) {
        taskAddCont.style.height = "50px"
        titleTakerInp.placeholder = "Take a note...";


        if (titleTakerInp.value.trim() !== "" || taskTakerInp.value.trim() !== "") {
            handleCreationOfNewTask();
        }

        // Reseting the values
        taskTakerInp.value = ""
        titleTakerInp.value = ""
    }



})

const taskArr = [];

function handleCreationOfNewTask() {
    const taskObj = {
        title: titleTakerInp.value,
        task: taskTakerInp.value
    }

    
    taskArr.push(taskObj)
    console.log(taskArr);
}

