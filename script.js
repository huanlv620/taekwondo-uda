const headerBar = document.querySelector(".header__bar");
const modalClose = document.querySelector(".modal__close");
const modal = document.querySelector(".modal");
const themeToggle = document.querySelector("#theme-toggle");
const html = document.documentElement;

headerBar.onclick = () => {
  modal.classList.add("show");
};

modalClose.onclick = () => {
  modal.classList.remove("show");
};

modal.onclick = (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
};

themeToggle.onclick = (e) => {
  themeToggle.classList.toggle("dark-mode");
  if (themeToggle.classList.contains("dark-mode")) {
    themeToggle.innerHTML = "<span >🌞</span> Light Mode";
    html.classList.add("dark");
  } else {
    themeToggle.innerHTML = "<span> 🌙</span> Dark Mode";
    html.classList.remove("dark");
  }
};
