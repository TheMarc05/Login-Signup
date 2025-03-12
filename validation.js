const form = document.getElementById("form");
const username_input = document.getElementById("username-input");
const email_input = document.getElementById("email-input");
const password_input = document.getElementById("password-input");
const repeat_password_input = document.getElementById("repeat-password-input");
const error_message = document.getElementById("error-message");

form.addEventListener("submit", (e) => {
  if (username_input) {
    // if we are a firstname input then we are in the singup
    errors = getSignupErrors(
      username_input.value,
      email_input.value,
      password_input.value,
      repeat_password_input.value
    );
  } else {
    // if we don't have a firstname input then we are in the login
    errors = getLoginFormErrors(email_input.value, password_input.value);
  }

  if (errors.length > 0) {
    e.preventDefault();
    error_message.innerText = errors.join(". ");
  }
});

function getSignupErrors(username, email, password, repeatPassword) {
  let errors = [];

  if (username === "" || username === null) {
    errors.push("Username is required");
    username_input.parentElement.classList.add("incorrect");
  }
  if (email === "" || email === null) {
    errors.push("Email is required");
    email_input.parentElement.classList.add("incorrect");
  }
  if (password === "" || password === null) {
    errors.push("Password is required");
    password_input.parentElement.classList.add("incorrect");
  }
  if (password.length < 8) {
    errors.push("Password must be at least 8 characters");
    password_input.parentElement.classList.add("incorrect");
  }
  if (password !== repeatPassword) {
    errors.push("Password does not match");
    password_input.parentElement.classList.add("incorrect");
    repeat_password_input.parentElement.classList.add("incorrect");
  }

  return errors;
}

const allInputs = [
  username_input,
  email_input,
  password_input,
  repeat_password_input,
];

allInputs.forEach((input) => {
  input.addEventListener("input", () => {
    if (input.parentElement.classList.contains("incorrect")) {
      input.parentElement.classList.remove("incorrect");
      error_message.innerText = "";
    }
  });
});
