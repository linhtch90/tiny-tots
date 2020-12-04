let username = "";
let password = "";
let isLogin = false;

const loginModal = document.getElementById("login-modal");
const loginClose = document.getElementById("login-modal-close");
const loginSubmit = document.getElementById("login-modal-submit");
const loginButton = document.getElementById("user-login-button");
const registerSubmit = document.getElementById("register-modal-submit");
const logoutButton = document.getElementById("user-logout-button");

const usernameLoginLabel = document.getElementById("username-login-label");
const passwordLoginLabel = document.getElementById("password-login-label");

const usernameRegisterLabel = document.getElementById(
  "username-register-label"
);
const emailRegisterLabel = document.getElementById("email-register-label");
const pass1RegisterLabel = document.getElementById("pass1-register-label");
const pass2RegisterLabel = document.getElementById("pass2-register-label");

// Prevent default activities of submit button
loginSubmit.addEventListener("click", (e) => {
  e.preventDefault();
});

registerSubmit.addEventListener("click", (e) => {
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

    if (username !== "" && password !== "") {
      console.log(username);
      console.log(password);
      isLogin = true;
      localStorage.setItem("userName", username);
      localStorage.setItem("password", password);
      localStorage.setItem("loginStatus", isLogin);
      loginButton.style.display = "none";
      logoutButton.innerHTML = "<i class='far fa-user'></i> " + username;
      logoutButton.style.display = "block";
      loginModal.style.display = "none";
    } else if (username === "") {
      usernameLoginLabel.innerHTML =
        "<span style='color: red;'>Please enter your username</span>";
    } else if (password === "") {
      passwordLoginLabel.innerHTML =
        "<span style='color: red;'>Please enter your password</span>";
    }
  };

  registerSubmit.onclick = () => {
    username = document.getElementById("register-modal-username").value;
    password = document.getElementById("register-modal-password").value;
    const emailRegister = document.getElementById("register-modal-email").value;
    const pass2Register = document.getElementById("register-modal-password2")
      .value;

    if (
      username !== "" &&
      password !== "" &&
      pass2Register === password &&
      emailRegister.includes("@") &&
      emailRegister.includes(".")
    ) {
      console.log(username);
      console.log(password);
      isLogin = true;
      localStorage.setItem("userName", username);
      localStorage.setItem("password", password);
      localStorage.setItem("loginStatus", isLogin);
      loginButton.style.display = "none";
      logoutButton.innerHTML = "<i class='far fa-user'></i> " + username;
      logoutButton.style.display = "block";
      loginModal.style.display = "none";
    } else if (username === "") {
      usernameRegisterLabel.innerHTML =
        "<span style='color: red;'>Please enter your username</span>";
    } else if (!(emailRegister.includes("@") && emailRegister.includes("."))) {
      emailRegisterLabel.innerHTML =
        "<span style='color: red;'>Invalid email</span>";
    } else if (password === "") {
      pass1RegisterLabel.innerHTML =
        "<span style='color: red;'>Please enter your password</span>";
    } else if (pass2Register === "") {
      pass2RegisterLabel.innerHTML =
        "<span style='color: red;'>Please enter your password again</span>";
    } else if (pass2Register !== password) {
      pass2RegisterLabel.innerHTML =
        "<span style='color: red;'>Password does not match</span>";
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
  if (inCart.length >= 0) {
    document.getElementById("cart").innerHTML =
      '<i class="fas fa-shopping-cart cart-icon"></i>&nbsp;<span class="cart-category">&nbsp;&nbsp;Cart: ' +
      inCart.length +
      "</span>";
  }
  console.log("Cart is checked!");
  console.log(inCart.length);
};

const logout = () => {
  // localStorage.setItem("userName", "");
  // localStorage.setItem("password", "");
  // localStorage.setItem("loginStatus", "false");
  localStorage.clear();
  loginButton.style.display = "block";
  // logoutButton.innerHTML = "<i class='far fa-user'></i> " + username;
  document.getElementById("cart").innerHTML =
    '<i class="fas fa-shopping-cart cart-icon"></i>';
  logoutButton.style.display = "none";
  loginModal.style.display = "none";
};
