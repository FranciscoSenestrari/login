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
    listUsers =  JSON.parse(localStorage.getItem("user"))
    console.log(listUsers)
  }
};

const renderRegister = () => {
  wrapper.style.marginTop = "0.5%";
  wrapper.style.height = "97%";
  animate();

  setTimeout(function () {
    title.textContent = "Register";
    regText.textContent = "Already have an account?";
    btn.value = "Register";
    buttonRegister.textContent = "Log in";
    buttonRegister.removeEventListener("click", renderRegister);
    buttonRegister.addEventListener("click", renderLogin);
    img.src = "/_dist_/pc-man.png";
  }, 900);
};
const renderLogin = () => {
  animate();
  setTimeout(function () {
    title.textContent = "Login";
    wrapper.style.height = " 80vh";
    regText.textContent = "You have account?";
    btn.value = "Log in";
    buttonRegister.textContent = "Register";
    img.src = "/_dist_/meditate.png";
    buttonRegister.removeEventListener("click", renderLogin);
    buttonRegister.addEventListener("click", renderRegister);
  }, 900);
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
      { opacity: 0, easing: "ease-in" },
      { opacity: 1, easing: "ease-out" },
    ],
    2000
  );
};
const login = () => {
  const found = listUsers.find((user) => user.id == id);
  
};
const register = () => {};
const search = () => {};
isEmpy();
buttonRegister.addEventListener("click", renderRegister);

/*
  <input
                    type="email"
                    class="border-gray-500 mt-1 rounded-[2px] p-1 border-2"
                    placeholder="example@example.com"
                    required
                  />
                  <input
                    type="password"
                    class="border-gray-500 mt-1 p-1 border-2 rounded-[2px]"
                    name=""
                    id=""
                    placeholder="*******"
                    required
                  />
                  <a class="flex justify-end my-2" href="">Froget password?</a>
*/
