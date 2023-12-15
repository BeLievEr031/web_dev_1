import { Client, Account, ID } from "appwrite";

let isUser = window.localStorage.getItem("user")
let user = JSON.parse(isUser)

if (user && user.email && user.$id) {
    window.location.replace("/");
}

const loginInp = document.querySelector("#login-inp")
const loginPSW = document.querySelector("#login-psw")
const loginBtn = document.querySelector("#login-btn")
const signInp = document.querySelector("#sign-email")
const signPSW = document.querySelector("#sign-pwd")
const signBtn = document.querySelector("#sign-btn")


const client = new Client();


client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65744bc35ca7360e44fa');

const account = new Account(client);


signBtn.addEventListener("click", function (e) {
    e.preventDefault()
    const promise = account.create(ID.unique(), signInp.value, signPSW.value);

    promise.then(function (response) {
        document.querySelector("#login-chk").click()
        loginInp.value = signInp.value;
    }, function (error) {
        console.log(error); // Failure
    });
})


loginBtn.addEventListener("click", function (e) {
    e.preventDefault()
    const promise = account.createEmailSession(loginInp.value, loginPSW.value);
    promise.then(function (response) {
        window.localStorage.setItem("user", JSON.stringify({
            $id: response.userId,
            email: response.providerUid,
        }))

        window.location.replace("/")
    }, function (error) {
        console.log(error); // Failure
    });
})

