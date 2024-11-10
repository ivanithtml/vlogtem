function validateLogin(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");


    if (username === "Naiman" && password === "12345") {
        window.location.href = "welcome.html"; 
    } else {
        errorMessage.textContent = "Неправильный логин или пароль";
        errorMessage.style.display = "block";
    }
}
