const menu = document.querySelector(".menu")
const aside = document.querySelector("aside")
const titleTakerInp = document.querySelector(".add-title")
const taskAddCont = document.querySelector(".task-add-inp");
const taskTakerInp = document.querySelector("#task-inp")
const taskBoxCont = document.querySelector(".task-box-cont")
const archiveBoxCont = document.querySelector(".archive-task-cont")
const deleteBoxCont = document.querySelector(".delete-task-cont")
const bgChangerBtn = document.querySelector("#bg-changer-btn")
const bgColorCont = document.querySelector(".bg-color-cont")
let activeItem = document.querySelector(".active-item")
const sideNavLinks = document.querySelectorAll(".items")

import { Client, Databases, Query, ID, Account } from "appwrite";
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65744bc35ca7360e44fa');


export { client }

const databases = new Databases(client);
let asideToggle = false;
let selectedColor = "#FFF"
const taskArr = [];

// SideBar navigation logic
let isArchivedClick = false;
let isBinClick = false;
sideNavLinks.forEach(function (elem) {
    elem.addEventListener("click", function () {
        activeItem.classList.remove("active-item")
        activeItem = elem;
        activeItem.classList.add("active-item")

        if (elem.id === "archive") {
            taskAddCont.style.display = "none"
            taskBoxCont.style.display = "none"
            archiveBoxCont.style.display = "flex"
            const archiveTask = taskArr.filter((elem) => elem.isArchived === true && elem.bin === false)

            deleteBoxCont.innerHTML = "";
            isArchivedClick === false && archiveTask.forEach(function (archiveTask) {
                archiveBoxCont.appendChild(constructHTMLForTask(archiveTask))
            })

            isArchivedClick = true;
            isBinClick = false;
        } else if (elem.id === "delete") {
            taskAddCont.style.display = "none"
            taskBoxCont.style.display = "none"
            archiveBoxCont.style.display = "none"
            deleteBoxCont.style.display = "flex"

            const deleteTaskArr = taskArr.filter((elem) => elem.bin === true)

            archiveBoxCont.innerHTML = "";
            isBinClick === false && deleteTaskArr.forEach(function (deleteTask) {
                deleteBoxCont.appendChild(constructHTMLForTask(deleteTask, true))
            })

            isArchivedClick = false;
            isBinClick = true;
        } else if (elem.id === "notes") {
            taskAddCont.style.display = "block"
            taskBoxCont.style.display = "flex"
            archiveBoxCont.style.display = "none"

            archiveBoxCont.innerHTML = "";
            deleteBoxCont.innerHTML = "";

            isArchivedClick = false;
            isBinClick = false

        }
    })
})

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
        let taskObj;
        if (titleTakerInp.value.trim() !== "" || taskTakerInp.value.trim() !== "") {
            taskObj = handleCreationOfNewTask();

            const promise = databases.createDocument(
                '65744c3abb87515f3181',
                '65744c6fb2a3ccdcc2b7',
                ID.unique(),
                taskObj
            );

            promise.then(function (response) {
                console.log(response);
            }, function (error) {
                console.log(error);
            });

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
        userid: JSON.parse(window.localStorage.getItem("user")).$id
    }

    const task = constructHTMLForTask(taskObj)
    taskBoxCont.appendChild(task)

    taskArr.push(taskObj)
    return taskObj;
}

function constructHTMLForTask(taskObj, isBin = false) {
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
        ${!isBin ? '<span class="material-symbols-outlined" id="task-archive-btn"> archive </span>' : ""}
        <span class="material-symbols-outlined" id="delete-btn" task_id=${taskObj.$id}> delete </span>
        <span class="material-symbols-outlined more_vert"> more_vert </span>
    </div>
    `

    taskDiv.appendChild(taskDataDiv)
    taskDiv.appendChild(labelDiv)

    taskDiv.innerHTML += actionBtnHTML;
    !isBin && taskDiv.querySelector("#task-archive-btn").addEventListener("click", function (e) {
        e.target.parentElement.parentElement.remove();
        taskObj.isArchived = true;
    })

    taskDiv.querySelector("#delete-btn").addEventListener("click", function (e) {


        console.log(e.target.attributes[2].value);

        const DOCUMENT_ID = e.target.attributes[2].value
        const promise = databases.deleteDocument(
            '65744c3abb87515f3181',
            '65744c6fb2a3ccdcc2b7',
            DOCUMENT_ID);

        promise.then(function (response) {
            console.log(response); // Success
            console.log("Badhai ho delete hua he !!!");
            e.target.parentElement.parentElement.remove();
            // taskObj.bin = true;
        }, function (error) {
            console.log(error); // Failure
        });
    })

    return taskDiv;
}

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
}

document.querySelector("#reset-color").addEventListener("click", function () {
    taskAddCont.style.backgroundColor = "#FFF"
    selectedColor = "#FFF"
})


async function fetchTaskaFromDB() {
    try {
        const tasksArr = await databases.listDocuments(
            '65744c3abb87515f3181',
            '65744c6fb2a3ccdcc2b7',
            [

                Query.equal("userid", [JSON.parse(window.localStorage.getItem("user")).$id + ""]),
                Query.limit(25),
                Query.offset(0)
            ]
        );

        console.log(tasksArr);
        tasksArr.documents.forEach(function (task) {
            console.log(task);
            taskBoxCont.appendChild(constructHTMLForTask(task))
        })

    } catch (error) {
        console.log(error);
    }
}

fetchTaskaFromDB();



const logoutBtn = document.querySelector("#logout")

logoutBtn.addEventListener("click", function () {
    window.localStorage.removeItem("user")
    window.location.replace("./login")
})