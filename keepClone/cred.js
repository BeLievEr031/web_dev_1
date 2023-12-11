let isUser = window.localStorage.getItem("user")
let user = JSON.parse(isUser)

if (!user || !user.email || !user.userID) {
    window.location.replace("./login");
}