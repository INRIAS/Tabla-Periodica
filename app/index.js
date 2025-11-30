import App from "./App.js";

document.addEventListener("DOMContentLoaded", (e) => {
  localStorage.clear();
  App();
});
window.addEventListener("hashchange", App);
