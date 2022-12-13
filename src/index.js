// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { buttonRegister } from "./buttonRegister";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCG_eZ6vxvWQS2WmI0UgWaxDGcvbf_T3Bg",
  authDomain: "login-example-4f5c6.firebaseapp.com",
  projectId: "login-example-4f5c6",
  storageBucket: "login-example-4f5c6.appspot.com",
  messagingSenderId: "995175335328",
  appId: "1:995175335328:web:958c6dc5ff6b4c3f42d0c5",
};

const app = initializeApp(firebaseConfig);
const wrapper = document.querySelector(".wrapper");
const title = document.querySelector(".title");
const img = document.querySelector(".img-lore");
const btn = document.querySelector(".btn-LR");
const regText = document.querySelector(".reg-text");
const inputGroup = document.querySelector(".input-group");

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
localStorage.setItem("users", JSON.stringify(users));

const renderRegister = () => {
  animate();
  title.textContent = "Register";
  wrapper.style.marginTop = "0.5%";
  wrapper.style.height = "97%";
  regText.textContent = "Already have an account?";
  btn.value = "Register";
  btn.addEventListener("click", renderLogin);
  buttonRegister.textContent = "Login";
  buttonRegister.removeEventListener("click", renderRegister);
  buttonRegister.addEventListener("click", renderLogin);
  img.src = "/_dist_/pc-man.png";
};
const renderLogin = () => {
  animate();
  title.textContent = "Login";
  wrapper.style.marginTop = "4%";
  wrapper.style.height = " 80vh";
  regText.textContent = "You have account?";
  btn.value = "Login";
  buttonRegister.textContent = "Register";
  img.src = "/_dist_/meditate.png";
  buttonRegister.removeEventListener("click", renderLogin);
  buttonRegister.addEventListener("click", renderRegister);
};
const animate = () => {
  wrapper.animate([{ opacity: "100% " }, { opacity: "20%" }], {
    duration: 1000,
    iterations: 1,
  });
};
const login = () => {};
const register = () => {};
buttonRegister.addEventListener("click", renderRegister);
