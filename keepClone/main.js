const menu = document.querySelector(".menu")
const aside = document.querySelector("aside")
const titleTakerInp = document.querySelector(".add-title")
const taskAddCont = document.querySelector(".task-add-inp");
const taskTakerInp = document.querySelector("#task-inp")
const taskBoxCont = document.querySelector(".task-box-cont")
const archiveBoxCont = document.querySelector(".archive-task-cont")
const bgChangerBtn = document.querySelector("#bg-changer-btn")
const bgColorCont = document.querySelector(".bg-color-cont")
let activeItem = document.querySelector(".active-item")
const sideNavLinks = document.querySelectorAll(".items")
// const asideArchive = document.querySelector("#aside-archive")
let asideToggle = false;
let selectedColor = "#FFF"
const taskArr = [];

// SideBar navigation logic
let isArchivedClick = false;

sideNavLinks.forEach(function (elem) {
    elem.addEventListener("click", function () {
        activeItem.classList.remove("active-item")
        activeItem = elem;
        activeItem.classList.add("active-item")

        if (elem.id === "archive") {
            taskAddCont.style.display = "none"
            taskBoxCont.style.display = "none"
            archiveBoxCont.style.display = "flex"
            const archiveTask = taskArr.filter((elem) => elem.isArchived === true)
            console.log(archiveTask);

            isArchivedClick === false && archiveTask.forEach(function (archiveTask) {
                archiveBoxCont.appendChild(constructHTMLForTask(archiveTask))
            })

            // if (isArchivedClick === false) {
            //     archiveTask.forEach(function (archiveTask) {
            //         archiveBoxCont.appendChild(constructHTMLForTask(archiveTask))
            //     })
            // }

            isArchivedClick = true;
        } else if (elem.id === "notes") {
            taskAddCont.style.display = "block"
            taskBoxCont.style.display = "flex"
            archiveBoxCont.style.display = "none"
        }
    })
})

// 🔥🔥🔥 Replace the logo according to the active sidebar link.

// This eventhandler handles menu toggling
menu.addEventListener("click", () => {
    if (asideToggle === false) {
        aside.style.width = "10vh"
    } else {
        aside.style.width = "40vh"
    }
    asideToggle = !asideToggle
})

titleTakerInp.addEventListener("focus", function () {
    if (window.getComputedStyle(taskAddCont).height === "50px") {
        this.placeholder = "title"
        taskAddCont.style.height = "150px"
        taskTakerInp.focus();
    }
})

document.addEventListener("click", function (e) {
    const classList = Array.from(e.target.classList);
    if (!classList.includes("__open__")) {
        taskAddCont.style.height = "50px"
        titleTakerInp.placeholder = "Take a note...";
        taskAddCont.style.backgroundColor = "#fff"

        if (titleTakerInp.value.trim() !== "" || taskTakerInp.value.trim() !== "") {
            handleCreationOfNewTask();
        }

        // Reseting the values
        taskTakerInp.value = ""
        titleTakerInp.value = ""
        selectedColor = "#FFF"
        bgColorCont.style.display = "none"
    }
})



function handleCreationOfNewTask() {
    const taskObj = {
        title: titleTakerInp.value,
        task: taskTakerInp.value,
        bin: false,
        isArchived: false,
        bgColor: selectedColor,
    }


    const task = constructHTMLForTask(taskObj)
    taskBoxCont.appendChild(task)

    taskArr.push(taskObj)
    console.log(taskArr);
}

function constructHTMLForTask(taskObj) {
    const taskDiv = document.createElement("div")
    taskDiv.classList.add("task")
    taskDiv.style.backgroundColor = taskObj.bgColor

    const taskDataDiv = document.createElement("div")
    taskDataDiv.classList.add("task-data")
    taskDataDiv.innerText = taskObj.task;

    const labelDiv = document.createElement("div")
    labelDiv.classList.add("label-cont")

    const actionBtnHTML = `
    <div class="action-btn-cont action-btn">
        <span class="material-symbols-outlined"> palette </span>
        <span class="material-symbols-outlined"> image </span>
        <span class="material-symbols-outlined" id="task-archive-btn"> archive </span>
        <span class="material-symbols-outlined more_vert"> more_vert </span>
    </div>
    `

    taskDiv.appendChild(taskDataDiv)
    taskDiv.appendChild(labelDiv)

    taskDiv.innerHTML += actionBtnHTML;
    taskDiv.querySelector("#task-archive-btn").addEventListener("click", function (e) {
        e.target.parentElement.parentElement.remove();
        taskObj.isArchived = true;

        console.log(taskArr);
    })

    return taskDiv;
}


// Change the background color of the inputs
// try to reset the value of bgcolor after close the expandable


bgChangerBtn.addEventListener("click", function (e) {
    bgColorCont.style.left = e.x + "px"
    bgColorCont.style.top = e.y + 25 + "px"
    bgColorCont.style.display = "block"
})

const color = document.querySelector(".color")


constructHTMLForBgColor()


function constructHTMLForBgColor() {

    const colorArr = [
        '#8a2be2',
        '#4b0082',
        '#0000ff',
        '#008000',
        '#ffff00',
        '#ffa500',
        '#ff0000',
        "#EFEFF1",
        "#E9E3D4",
        "#F6E2DD",
    ];

    const imgArr = [
        "./public/ab_1.jpg",
        "./public/ab_2.jpg",
        "./public/ab_3.jpg",
        "./public/ab_4.jpg",
    ]

    for (let i = 0; i < colorArr.length; i++) {
        const span = document.createElement("span")
        span.classList.add("color")
        span.classList.add("__open__")
        span.style.backgroundColor = colorArr[i]
        span.color = colorArr[i]

        span.addEventListener("click", function (e) {
            taskAddCont.style.backgroundColor = span.color;
            selectedColor = span.color;
        })

        bgColorCont.querySelector("div").appendChild(span)
    }

    // for (let i = 0; i < imgArr.length; i++) {
    //     const span = document.createElement("span")
    //     span.classList.add("color")
    //     span.classList.add("__open__")
    //     span.style.background = `url(${imgArr[i]})`
    //     span.bgImg = imgArr[i]

    //     span.addEventListener("click", function (e) {
    //         taskAddCont.style.background = `url(${imgArr[i]})`;
    //         // selectedColor = span.color;
    //     })

    //     bgColorCont.querySelector("#bg-img-cont").appendChild(span)
    // }
}

document.querySelector("#reset-color").addEventListener("click", function () {
    taskAddCont.style.backgroundColor = "#FFF"
    selectedColor = "#FFF"
})



// asideArchive.addEventListener("click", function () {
//     taskAddCont.style.display = "none"
//     let taskCont = taskBoxCont.querySelectorAll(".task")
// })