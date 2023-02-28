const quitButton = document.querySelector(".quit");
console.log(quitButton);
const render = () => {
  const currentUser = JSON.parse(window.sessionStorage.getItem("currentUser"));
  console.log(currentUser.name);
  const username = document.querySelector(".username");
  const email = document.querySelector(".email");
  const name = document.querySelector(".name");
  quitButton.addEventListener("click", quit);
  name.textContent = currentUser.name;
  email.textContent = currentUser.email;
  username.textContent = currentUser.username;
};
const quit = () => {
  console.log("passhere");
  window.sessionStorage.removeItem("currentUser");
  quitButton.href = "/";
};
render();
