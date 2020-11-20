let username = "";
let password = "";
let isLogin = false;

const loginModal = document.getElementById("login-modal");
const loginClose = document.getElementById("login-modal-close");
const loginSubmit = document.getElementById("login-modal-submit");
const loginButton = document.getElementById("user-login-button");
const logoutButton = document.getElementById("user-logout-button");

// Prevent default activities of submit button
loginSubmit.addEventListener("click", (e) => {
  e.preventDefault();
});

const login = () => {
  loginModal.style.display = "block";
  loginClose.onclick = () => {
    loginModal.style.display = "none";
  };
  loginSubmit.onclick = () => {
    username = document.getElementById("login-modal-username").value;
    password = document.getElementById("login-modal-password").value;
    isLogin = true;
    if (username !== "" && password !== "") {
      console.log(username);
      console.log(password);
      localStorage.setItem("userName", username);
      localStorage.setItem("password", password);
      localStorage.setItem("loginStatus", isLogin);
      loginButton.style.display = "none";
      logoutButton.innerHTML = "<i class='far fa-user'></i> " + username;
      logoutButton.style.display = "block";
      loginModal.style.display = "none";
    }
  };
};

const checkLogin = () => {
  const checkUsername = localStorage.getItem("userName");
  const checkPassword = localStorage.getItem("password");
  if (
    checkUsername !== "" &&
    checkUsername !== null &&
    checkPassword !== "" &&
    checkPassword !== null
  ) {
    username = checkUsername;
    password = checkPassword;
    isLogin = true;
    loginButton.style.display = "none";
    logoutButton.innerHTML = "<i class='far fa-user'></i> " + username;
    logoutButton.style.display = "block";
    loginModal.style.display = "none";
  } else {
    isLogin = false;
  }
  return isLogin;
};

const checkCart = () => {
  let inCart = JSON.parse(localStorage.getItem("cart-items"));
  if (inCart.length > 0) {
    document.getElementById("cart").innerHTML +=
      '<span class="cart-category">&nbsp;&nbsp;Cart: ' +
      inCart.length +
      "</span>";
  }
};

const logout = () => {
  // localStorage.setItem("userName", "");
  // localStorage.setItem("password", "");
  // localStorage.setItem("loginStatus", "false");
  localStorage.clear();
  loginButton.style.display = "block";
  logoutButton.innerHTML = "<i class='far fa-user'></i> " + username;
  logoutButton.style.display = "none";
  loginModal.style.display = "none";
};

// Form validation
(function loginValidate() {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();
