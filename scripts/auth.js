class Auth {
    constructor() {
        const auth = localStorage.getItem("auth");
        this.validateAuth(auth);
    }

    validateAuth(auth) {
        if (auth !== "1") {  
            window.location.href = "login.html";  
        } else {
            document.querySelector("body").style.display = "block";
        }
    }

    logOut() {
        localStorage.removeItem("auth");
        localStorage.removeItem("token");
        localStorage.removeItem("uname");

        window.location.href = "login.html";
    }
}