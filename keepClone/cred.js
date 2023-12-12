let isUser = window.localStorage.getItem("user")
let user = JSON.parse(isUser)

if (!user || !user.email || !user.$id) {
    window.location.replace("./login");
}