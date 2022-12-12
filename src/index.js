// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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
const buttonRegiter = document.querySelector(".register");
const buttonRenderLogin = document.querySelector(".btn-login");

const renderRegister = () => {
  const title = document.querySelector(".title");
  const img = document.querySelector(".img-lore");
  const btn = document.querySelector(".btn-login");
  const regText = document.querySelector(".reg-text");
  img.animate(
    [
      // fotogramas clave
      { opacity: "100% " },
      { opacity: "0%" },
    ],
    {
      // opciones de sincronización
      duration: 1000,
      iterations: 1,
    }
  );
  title.textContent = "Register";
  wrapper.style.marginTop = "0.5%";
  wrapper.style.height = "97%";
  regText.textContent = "Already have an account?";
  btn.value = "Register";
  btn.addEventListener("click", renderLogin);

  img.src = "/_dist_/pc-man.png";
  console.log(img);
};
const renderLogin = () => {
  /*
  const wrapperCopy = wrapper;
  const title = document.querySelector(".title");
  const img = document.querySelector(".img-lore");
  const btn = document.querySelector(".btn-login");
  const regText = document.querySelector(".reg-text");
  title.textContent = "Login";
  wrapperCopy.style.marginTop = "4%";
  wrapperCopy.style.height = " 80vh";
  regText.textContent = "You have account?";
  btn.value = "Login";
  */
};
buttonRegiter.addEventListener("click", renderRegister);
