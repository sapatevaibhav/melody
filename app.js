const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const login = document.querySelector(".login");
const register = document.querySelector(".register");

register.addEventListener("click", () => {
  var username = document.getElementById("new_username").value;
  var password = document.getElementById("new_password").value;

  if (username.length != 0) {
    if (password.length != 0) {
      localStorage.setItem(username, password);
      container.classList.remove("sign-up-mode");
    }
  }
}
);

login.addEventListener("click", () => {
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;

  // username = localStorage.getItem(user);
  password = localStorage.getItem(user);
  if (pass == password) {
    window.alert("signed in successfully");
    window.open("meditation.html");
  } else {
    window.alert("Invalid username or password");
  }
});