const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "BLEACHTYBW" && password === "SOULSOCIETY") {
        alert("You have successfully logged in.");
        const targetDiv = document.getElementById("audio");
        targetDiv.style.display = "block";
         
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})