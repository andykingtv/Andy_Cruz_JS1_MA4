const form = document.querySelector("#contactForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  const firstName = document.querySelector("#firstName");
  const firstNameError = document.querySelector("#firstNameError");
  const firstNameRate = firstName.value;

  if (checkInputLength(firstNameRate) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }
}
function checkInputLength(value) {
  const trimmedRate = value.trim();

  if (trimmedRate.length >= 2) {
    return true;
  } else {
    return false;
  }
}

// this is basically lesson 4, so swapped some "value" to "rate" just to not copy paste
