let loginEmailInput = document.getElementById("loginEmail");
let loginPasswordInput = document.getElementById("loginPassword");
let loginBtn = document.getElementById("loginBtn");
let signupAnchor = document.getElementById("signupAnchor");
let Alert1=document.querySelector(".alert1");
let Alert2=document.querySelector(".alert2");


let users = [];

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

function logIn() {
  let loginEmail = loginEmailInput.value;
  let loginPassword = loginPasswordInput.value;

  if (loginEmailInput.value === "" || loginPasswordInput.value === "") {
    
    Alert1.classList.remove("d-none")
    return;
  }
  
 else {

    Alert2.classList.add("d-none")

  }

  if (isUser(loginEmail, loginPassword)) {
    window.location.href = "home.html";
  } else {

    Alert2.classList.remove("d-none")

  }
}

function isUser(email, password) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === password) {
      localStorage.setItem("userName", users[i].name);
      return true;
    }
  }
  return false;
}

loginBtn.addEventListener("click", function () {
  logIn();
});

signupAnchor.addEventListener("click", function () {
 window.open( window.location.href = "signup.html");
});