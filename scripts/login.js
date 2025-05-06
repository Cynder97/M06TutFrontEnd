let token

document.querySelector("#loginBtn").addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Login button clicked, event prevented.");
    
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    login(username, password);
});




async function login(username, password) {
    const login_cred = {
        username,
        password
    };

    try {
        const response = await fetch("https://yummy-numerous-muscle.glitch.me/api/auth/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(login_cred)
        });

        console.log("Response Status:", response.status);
        if (!response.ok) {
            throw new Error("Incorrect Username or Password");
        }

        const tokenResponse = await response.json();
        console.log("Token Response:", tokenResponse);

        localStorage.setItem("token", tokenResponse.token);
        localStorage.setItem("uname", tokenResponse.username2);
        localStorage.setItem("auth", tokenResponse.auth);

        window.location.replace("index.html");

    } catch (error) {
        console.error("Login Error:", error);
    
        const errorMsgElement = document.querySelector("#errorMsg");
        if (errorMsgElement) {
            errorMsgElement.innerHTML = "Incorrect Username or Password";
        } else {
            console.error("Error message element not found in the DOM.");
        }
    }
    
}
