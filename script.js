const headerBar = document.querySelector(".header__bar");
const modalClose = document.querySelector(".modal__close");
const modal = document.querySelector(".modal");
const inputCheckedToggle = document.querySelector("#dark-mode");
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

const checkStatus = JSON.parse(localStorage.getItem("checkToggle"));

if (checkStatus) {
  inputCheckedToggle.setAttribute("checked", "checked");
  html.classList.add("dark");
} else {
  inputCheckedToggle.removeAttribute("checked");
  html.classList.remove("dark");
}

inputCheckedToggle.addEventListener("change", (event) => {
  if (event.currentTarget.checked) {
    html.classList.add("dark");
    localStorage.setItem("checkToggle", true);
  } else {
    html.classList.remove("dark");
    localStorage.removeItem("checkToggle");
  }
});

function sum(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3];
const result = sum.apply(null, numbers);
console.log(result);
