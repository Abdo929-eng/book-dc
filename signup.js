let signupBtn = document.getElementById("signupBtn");
let signupNameInput = document.getElementById("signupName");
let signupEmailInput = document.getElementById("signupEmail");
let signupPasswordInput = document.getElementById("signupPassword");
let loginAnchor = document.getElementById("loginAnchor");
let Alertp=document.querySelector(".alert")

let users = [];

if (localStorage.getItem("users") != null) {
  users = JSON.parse(localStorage.getItem("users"));
}

function signUp() {
  let user = {
    name: signupNameInput.value,
    email: signupEmailInput.value,
    password: signupPasswordInput.value,
  };

  if (signupNameInput.value === "" || signupEmailInput.value === "" || signupPasswordInput.value === "") {
   Alertp.classList.remove("d-none");
    return;   
  }


  if (isValidEmail(signupEmailInput.value) &&isNewEmail(signupEmailInput.value)&&isValidpassword(signupPasswordInput.value)) {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    clearForm();

     }
  
}

signupBtn.addEventListener("click", function () {
  signUp();
});

function isValidEmail(email) {
  let Regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return Regex.test(email);
}
function isValidpassword(password) {

  let Regx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  
  return Regx.test(password);
}

function isNewEmail(email) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return false;
    }
  }
  return true;
}

function clearForm() {
  signupNameInput.value = "";
  signupEmailInput.value = "";
  signupPasswordInput.value = "";
}

loginAnchor.addEventListener("click", function () {
  window.location.href = "login.html";
});