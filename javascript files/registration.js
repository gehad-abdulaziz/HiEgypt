var x = document.getElementById("login");
var y = document.getElementById("Signup");
var z = document.getElementById("btn");

function Signup(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}  

function validateEmail(email) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function validateLogin() {
    var loginEmail = document.getElementById('login-email').value;
    var loginPassword = document.getElementById('login-password').value;

    if (!validateEmail(loginEmail)) {
        alert("Please enter a valid email address for login.");
        return false;
    }

    if (loginPassword.length < 8) {
        alert("Password must be at least 8 characters long for login.");
        return false;
    }

    showMessage("You logged in successfully.");
    return true;
}

function validateSignup() {
    var signupEmail = document.getElementById('signup-email').value;
    var signupPassword = document.getElementById('signup-password').value;

    if (!validateEmail(signupEmail)) {
        alert("Please enter a valid email address for signup.");
        return false;
    }

    if (signupPassword.length < 8) {
        alert("Password must be at least 8 characters long for signup.");
        return false;
    }

    showMessage("You signed up successfully.");
    return true;
}

function validateLogin() {
    var loginEmail = document.getElementById('login-email').value;
    var loginPassword = document.getElementById('login-password').value;

    if (!validateEmail(loginEmail)) {
        alert("Please enter a valid email address for login.");
        return false;
    }

    if (loginPassword.length < 8) {
        alert("Password must be at least 8 characters long for login.");
        return false;
    }

    showMessage("You logged in successfully.");
    return true;
}


function showMessage(message) {
    alert(message);
}


var x = document.getElementById("login");
var y = document.getElementById("Signup");
var z = document.getElementById("btn");

function Signup() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}

function validateEmail(email) {
    var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function validateLogin() {
    var loginEmail = document.getElementById('login-email').value;
    var loginPassword = document.getElementById('login-password').value;

    if (!validateEmail(loginEmail)) {
        alert("Please enter a valid email address for login.");
        return false;
    }

    if (loginPassword.length < 8) {
        alert("Password must be at least 8 characters long for login.");
        return false;
    }

    localStorage.setItem('loginEmail', loginEmail);
    localStorage.setItem('isLoggedIn', 'true');

    showMessage("You logged in successfully.");
    return true;
}

function validateSignup() {
    var signupName = document.getElementById('signup-name').value;
    var signupEmail = document.getElementById('signup-email').value;
    var signupPassword = document.getElementById('signup-password').value;

    if (signupName.trim() === "") {
        alert("Please enter your name for signup.");
        return false;
    }

    if (!validateEmail(signupEmail)) {
        alert("Please enter a valid email address for signup.");
        return false;
    }

    if (signupPassword.length < 8) {
        alert("Password must be at least 8 characters long for signup.");
        return false;
    }

    localStorage.setItem('signupName', signupName);
    localStorage.setItem('signupEmail', signupEmail);
    localStorage.setItem('isSignedUp', 'true');

    showMessage("You signed up successfully.");
    return true;
}

function showMessage(message) {
    alert(message);
}
