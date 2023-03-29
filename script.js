const modal = document.querySelector(".modal1");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnCloseModal2 = document.querySelector("button.close");
const btnsOpenModal = document.querySelector(".show-modal");
const signUP = document.querySelector(".btn btn-outline-primary");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
btnCloseModal2.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// read more function

function myFunction(i) {
  var dots = document.getElementById(`dots${i}`);
  var moreText = document.getElementById(`more${i}`);
  var btnText = document.getElementById(`myBtn${i}`);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
