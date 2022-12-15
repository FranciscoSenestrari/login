// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const wrapper = document.querySelector(".wrapper");
const buttonRegister = document.querySelector(".register");
const title = document.querySelector(".title");
const img = document.querySelector(".img-lore");
const btn = document.querySelector(".btn-LR");
const regText = document.querySelector(".reg-text");
const form = document.querySelector(".form");
const inputGroup = document.querySelector(".input-group");
const bodyBox = document.querySelector(".box-body");

const inputEmail = document.createElement("input");
const inputReEmail = document.createElement("input");
const inputRePassword = document.createElement("input");
const inputPassword = document.createElement("input");
const inputName = document.createElement("input");
const inputLastName = document.createElement("input");
const div = document.createElement("div");
const twClasses = "border-gray-500 rounded-[2px] p-1 border-[1.5px] m-1";
let listUsers;
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
const isEmpy = () => {
  if (!localStorage["users"]) {
    localStorage.setItem("users", JSON.stringify(users));
    listUsers = JSON.parse(localStorage.getItem("users"));
    console.log(listUsers);
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
    img.src = "/_dist_/pc-man.png";

    div.className = " flex-auto flex-row";
    createInputs();
  }, 1000);
};
const renderLogin = () => {
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
const login = () => {
  const found = listUsers.find((user) => user.id == id);
};
const register = () => {};
const search = () => {};
const createInputs = () => {
  inputEmail.className = twClasses;
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
  inputRePassword.placeholder = "Repeat password";

  inputPassword.className = twClasses;
  inputPassword.required = true;
  inputPassword.type = "password";
  inputPassword.placeholder = "********";

  inputReEmail.className = twClasses;
  inputReEmail.required = true;
  inputReEmail.placeholder = "Repeat Email";

  div.appendChild(inputName);
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
isEmpy();
buttonRegister.addEventListener("click", renderRegister);
