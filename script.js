const headerBar = document.querySelector(".header__bar");
const modalClose = document.querySelector(".modal__close");
const modal = document.querySelector(".modal");

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
