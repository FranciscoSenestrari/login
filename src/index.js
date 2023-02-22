// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";
import confetti from "canvas-confetti";

const app = initializeApp(firebaseConfig);
const wrapper = document.querySelector(".wrapper");
const buttonRegister = document.querySelector(".register");
const inputEmail = document.createElement("input");
inputEmail.className = "email";
const title = document.querySelector(".title");
const img = document.querySelector(".img-lore");
const btn = document.querySelector(".btn-LR");
const regText = document.querySelector(".reg-text");
const form = document.querySelector("#form");
const inputGroup = document.querySelector(".input-group");
const bodyBox = document.querySelector(".box-body");
const inputReEmail = document.createElement("input");
const inputRePassword = document.createElement("input");
const inputPassword = document.createElement("input");
const inputName = document.createElement("input");
const inputLastName = document.createElement("input");
const div = document.createElement("div");
const twClasses = "border-gray-500 rounded-[2px] p-1 border-[1.5px] m-1";

let listUsers = [];
let users = [
  {
    userId: 1,
    username: "frans",
    email: "frans@frans.com",
    password: "pass123",
    name: "Francis",
    lastname: "Senes",
  },
  {
    userId: 2,
    username: "luz42",
    email: "lucy@lucy.com",
    password: "pass123",
    name: "Lucy",
    lastname: "Senes",
  },
  {
    userId: 3,
    username: "juliet",
    email: "juliet4@julies.com",
    password: "pass123",
    name: "Julliette",
    lastname: "Salas",
  },
];
listUsers = JSON.parse(localStorage.getItem("users"));
const isEmpy = () => {
  if (!localStorage["users"]) {
    localStorage.setItem("users", JSON.stringify(users));
    listUsers = JSON.parse(localStorage.getItem("users"));
  }
};

const renderRegister = () => {
  wrapper.style.marginTop = "0.5%";
  wrapper.style.height = "97%";
  animate();
  setTimeout(function () {
    clean();
    title.textContent = "Register";
    regText.textContent = "Already have an account?";
    btn.value = "Register";
    buttonRegister.textContent = "Log in";
    buttonRegister.removeEventListener("click", renderRegister);
    buttonRegister.addEventListener("click", renderLogin);
    btn.removeEventListener("click", login);
    btn.addEventListener("click", register);

    img.src = "/_dist_/pc-man.png";

    div.className = " flex-auto flex-row";
    createInputs();
  }, 1000);
};
const renderLogin = () => {
  const forgetLink = document.createElement("a");
  forgetLink.className = "flex justify-end my-2";
  forgetLink.textContent = "Froget password?";
  animate();
  setTimeout(function () {
    clean();
    title.textContent = "Login";
    wrapper.style.height = " 80vh";
    regText.textContent = "You have account?";
    btn.value = "Log in";
    buttonRegister.textContent = "Register";
    img.src = "/_dist_/meditate.png";
    buttonRegister.removeEventListener("click", renderLogin);
    buttonRegister.addEventListener("click", renderRegister);
    inputGroup.appendChild(inputEmail);
    inputGroup.appendChild(inputPassword);
    inputGroup.appendChild(forgetLink);
    btn.removeEventListener("click", register);
    btn.addEventListener("click", login);
  }, 1000);
};
const animate = () => {
  img.animate(
    [
      { opacity: 1, easing: "ease-out" },
      { opacity: 0, easing: "ease-in" },
      { opacity: 1, easing: "ease-out" },
    ],
    2000
  );
  bodyBox.animate(
    [
      { opacity: 1, easing: "ease-out" },
      { opacity: 0, easing: "ease-out" },
      { opacity: 1, easing: "ease-in" },
    ],
    2000
  );
};

const register = () => {
  if (inputEmail.value !== inputReEmail.value) {
    inputReEmail.style.borderColor = "red";
    inputReEmail.title = "Does not match";
  }
  if (inputPassword.value !== inputRePassword.value) {
    inputRePassword.style.borderColor = "red";
    inputRePassword.title = "Does not match";
  }
  let user = {
    userId: Math.random().toString(16).slice(2),
    username: inputName.value,
    email: inputEmail.value,
    password: inputPassword.value,
    name: inputName.value,
    lastname: inputLastName.value,
  };
  listUsers.push(user);
  updateLocalStorange();
  window.alert("create user sussefull");
  renderLogin();
};
const createInputs = () => {
  inputEmail.className = twClasses + " email";
  inputEmail.required = true;
  inputEmail.placeholder = "example@example.com";
  inputEmail.type = "email";

  inputName.className = "border-gray-500 rounded-[2px] p-1 border-[1.5px] m-1 ";
  inputName.placeholder = "Name";
  inputName.required = true;

  inputLastName.className =
    "border-gray-500 rounded-[2px] p-1 border-[1.5px] m-1";
  inputLastName.placeholder = "Lastname";
  inputLastName.required = true;

  inputRePassword.className = twClasses;
  inputRePassword.required = true;
  inputRePassword.type = "password";
  inputRePassword.placeholder = "Repeat password";

  inputPassword.className = twClasses;
  inputPassword.required = true;
  inputPassword.type = "password";
  inputPassword.placeholder = "********";
  inputPassword.pattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{6,}$";
  inputPassword.title =
    "Minimum six characters, at least one uppercase letter, one lowercase letter and one number";

  inputReEmail.className = twClasses;
  inputReEmail.required = true;
  inputReEmail.placeholder = "Repeat Email";

  div.className = div.appendChild(inputName);
  div.appendChild(inputLastName);
  inputGroup.appendChild(div);
  inputGroup.appendChild(inputEmail);
  inputGroup.appendChild(inputReEmail);
  inputGroup.appendChild(inputPassword);
  inputGroup.appendChild(inputRePassword);
};
const clean = () => {
  while (inputGroup.firstChild) {
    inputGroup.firstChild.remove();
  }
};
const renderwellcome = (user) => {
  /*
  window.location("%PUBLIC_URL%/home");
  const username = document.querySelector(".username");
  const email = document.querySelector("email");
  const name = document.querySelector("name");
  name.value = user.name;
  email.value = user.email;
  username.value = user.username; 
  confetti.create(document.querySelector(".canva"), {
    resize: true,
    useWorker: true,
  })({ particleCount: 200, spread: 200 });*/
};
const updateLocalStorange = () => {
  window.localStorage.setItem("users", JSON.stringify(listUsers));
};

isEmpy();
buttonRegister.addEventListener("click", renderRegister);
const login = () => {
  const email = document.querySelector(".email");
  const password = document.querySelector(".password");
  const currentUser = listUsers.find((user) => user.email == email.value);
  if (
    currentUser.email != email.value ||
    currentUser.password != password.value
  ) {
    alert("User or password invalid ");
  } else if (
    currentUser.email == email.value &&
    currentUser.password == password.value
  ) {
    console.log("hola");

    //window.location("%PUBLIC_URL%/home");
    // window.location("%PUBLIC_URL%/home.html");
    //window.location.assign("/home");
    // window.location.assign("%PUBLIC_URL%/home.html")
    //window.location.assign('https://developer.mozilla.org/en-US/docs/Web/API/Location/reload');
    // window.location.replace("%PUBLIC_URL%/home.html")
    setTimeout(function () {

      document.location.href = "/home";
    }, 1);
    console.log("fafa");

    // renderwellcome(currentUser);
  } else {
    console.log("por aca pasa");
  }
};
form.onsubmit = () => {
  login();
};
