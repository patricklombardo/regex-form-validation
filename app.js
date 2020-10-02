// Event Listeners
document.querySelector("#name").addEventListener("blur", validateName);
document.querySelector("#zip").addEventListener("blur", validateZip);
document.querySelector("#email").addEventListener("blur", validateEmail);
document.querySelector("#phone").addEventListener("blur", validatePhone);

function validateName() {
  const name = document.querySelector("#name");
  /**
   * Letters A-Z
   * Capital or Lowercase
   * 2-10 characters
   */
  const re = /^[a-zA-Z]{2,10}$/;

  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
  }
}

function validateZip() {
  const zip = document.querySelector("#zip");
  /**
   * 5-digit zip code
   * Optional 4 extra digits plus dash
   */
  const re = /^[0-9]{5}(-[0-9]{4})?$/;

  if (!re.test(zip.value)) {
    zip.classList.add("is-invalid");
  } else {
    zip.classList.remove("is-invalid");
  }
}

function validateEmail() {
  const email = document.querySelector("#email");
  /**
   * Email
   * Uppercase and lowercase characters, numbers, underscores, dashes and dots
   * More than 1 (+)
   * followed by an @
   * followed by the website (i.e. gmail), same pattern as above
   * followed by a .
   * followed by the TLD (i.e. .com, .net, .fr) of 2-5 characters
   */
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
}

function validatePhone() {
  const phone = document.querySelector("#phone");
  /**
   * Accept any phone format
   *
   */
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if (!re.test(phone.value)) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
  }
}
