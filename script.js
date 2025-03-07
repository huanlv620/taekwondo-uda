const headerBar = document.querySelector(".header__bar");
const modalClose = document.querySelector(".modal__close");
const modal = document.querySelector(".modal");
const themeToggle = document.querySelectorAll(".theme-toggle");
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

themeToggle.forEach((item) => {
  item.onclick = (e) => {
    item.classList.toggle("dark-mode");
    html.classList.toggle("dark");
    if (
      item.classList.contains("theme-toggle--md") &&
      item.classList.contains("dark-mode")
    ) {
      item.innerHTML = "🌙";
      return;
    }

    if (
      item.classList.contains("theme-toggle--md") &&
      !item.classList.contains("dark-mode")
    ) {
      item.innerHTML = "🌞";
      return;
    }

    if (
      item.classList.contains("theme-toggle--lg") &&
      item.classList.contains("dark-mode")
    ) {
      item.innerHTML = "<span >🌞</span> Light Mode";
      return;
    }
    if (
      item.classList.contains("theme-toggle--lg") &&
      !item.classList.contains("dark-mode")
    ) {
      item.innerHTML = "<span> 🌙</span> Dark Mode";
      return;
    }
  };
});
