class Auth{
    constructor(){
    const auth = localStorage.getItem("auth");

    console.log("Auth value in localStorage:", auth);

    if (auth !== "1") {
        console.log("User not authenticated. Redirecting...");
        window.location.replace("login.html");
    } else {
        document.querySelector("body").style.display = "block";
    }
}
    
    logOut(){
        localStorage.removeItem("auth")
        localStorage.removeItem("token")
        localStorage.removeItem("uname")

        window.location.replace("login.html")
    }
}