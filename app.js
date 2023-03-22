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
      var date = new Date();
      date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);

      document.cookie = "username=" + username + "; expires=" + date.toUTCString();
      document.cookie = "password=" + password + "; expires=" + date.toUTCString();

      window.alert("Success! now you can login");
      container.classList.remove("sign-up-mode");
    }
    else {
      window.alert("password cannot be empty");
    }
  }
  else {
    window.alert("username cannot be empty");
  }
});

login.addEventListener("click", () => {
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;
  var cookieString = document.cookie;
  var cookies = cookieString.split("; ");
  var username = null;
  var password = null;

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var parts = cookie.split("=");

    if (parts[0] === "username") {
      username = decodeURIComponent(parts[1]);
    }

    if (parts[0] === "password") {
      password = decodeURIComponent(parts[1]);
    }
  }

  if (user == username && pass == password) {
    window.alert("signed in successfully");

    window.open ("meditation.html");
  } else {
    window.alert("Invalid username or password");
  }

});