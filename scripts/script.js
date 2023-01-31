`use strict`;

// select elements
const formEl = document.getElementById(`form`);
const usernameEl = document.getElementById(`username`);
const emailEl = document.getElementById(`email`);
const mobileEl = document.getElementById(`mobile`);
const passwordEl = document.getElementById(`password`);
const confirmPasswordEl = document.getElementById(`confirm-password`);

// events
formEl.addEventListener(`submit`, (e) => {
  e.preventDefault();
  if (usernameEl.value === ``) {
    const formControlEl = usernameEl.parentElement;
    formControlEl.classList.add(`error`);
  } else {
    const formControlEl = usernameEl.parentElement;
    formControlEl.classList.add(`success`);
  }

  if (emailEl.value === ``) {
    const formControlEl = emailEl.parentElement;
    formControlEl.classList.add(`error`);
  } else {
    const formControlEl = emailEl.parentElement;
    formControlEl.classList.add(`success`);
  }

  if (mobileEl.value === ``) {
    const formControlEl = mobileEl.parentElement;
    formControlEl.classList.add(`error`);
  } else {
    const formControlEl = mobileEl.parentElement;
    formControlEl.classList.add(`success`);
  }

  if (passwordEl.value === ``) {
    const formControlEl = passwordEl.parentElement;
    formControlEl.classList.add(`error`);
  } else {
    const formControlEl = passwordEl.parentElement;
    formControlEl.classList.add(`success`);
  }

  if (confirmPasswordEl.value === ``) {
    const formControlEl = confirmPasswordEl.parentElement;
    formControlEl.classList.add(`error`);
  } else {
    const formControlEl = confirmPasswordEl.parentElement;
    formControlEl.classList.add(`success`);
  }
});
