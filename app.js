const showBtn = document.querySelector(".show-btn");
const closeBtn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const showModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

showBtn.addEventListener("click", showModal);

closeBtn.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);
