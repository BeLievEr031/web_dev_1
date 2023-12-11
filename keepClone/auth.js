import { Client, Account } from "appwrite";
// import { client } from "./app";

let isUser = window.localStorage.getItem("user")
let user = JSON.parse(isUser)

if (user && user.email && user.userID) {
    window.location.replace("/");
}

const loginInp = document.querySelector("#login-inp")
const loginPSW = document.querySelector("#login-psw")
const loginBtn = document.querySelector("#login-btn")


const client = new Client();


client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65744bc35ca7360e44fa');

const account = new Account(client);




loginBtn.addEventListener("click", function (e) {
    e.preventDefault()
    const promise = account.createEmailSession(loginInp.value, loginPSW.value);
    console.log(45);
    promise.then(function (response) {
        console.log(response); // Success
        window.localStorage.setItem("user", JSON.stringify({
            $id: response.$id,
            userID: response.userId,
            email: response.providerUid,
        }))

        window.location.replace("/")
    }, function (error) {
        console.log(error); // Failure
    });
})

