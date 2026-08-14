const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");
const form = document.getElementById("info-form");
const formStatus = document.getElementById("form-status");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
}

if (form && formStatus) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      formStatus.textContent = "Please fill in the required fields.";
      return;
    }

    formStatus.textContent = "Thank you. Your request has been sent.";
    form.reset();
  });
}
