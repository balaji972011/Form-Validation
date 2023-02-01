`use strict`;

// select elements
const formEl = document.getElementById(`form`);
const usernameEl = document.getElementById(`username`);
const emailEl = document.getElementById(`email`);
const mobileEl = document.getElementById(`mobile`);
const passwordEl = document.getElementById(`password`);
const confirmPasswordEl = document.getElementById(`confirm-password`);

// functions
const inputArr = [usernameEl, emailEl, mobileEl, passwordEl, confirmPasswordEl];

const showError = function (el, message) {
  const formControlEl = el.parentElement;
  formControlEl.className = `form-control error`;
  const smallEl = formControlEl.querySelector(`small`);
  smallEl.textContent = message;
};

const showSuccess = function (el) {
  const formControlEl = el.parentElement;
  formControlEl.className = `form-control success`;
};

const checkRequired = function (arr) {
  for (const el of arr) {
    if (el.value === ``) {
      showError(el, `${el.name} required`);
    } else {
      showSuccess(el);
    }
  }
};

const checkLength = function (el, min, max) {
  if (el.value.length < min) {
    showError(el, `${el.name} should have min ${min} characters`);
  } else if (el.value.length > max) {
    showError(el, `${el.name} should have max ${max} characters`);
  } else {
    showSuccess(el);
  }
};

const checkPasswordMatch = function (elOne, elTwo) {
  if (elOne.value === `` || elTwo.value === ``) {
    showError(elOne, `Password required`);
    showError(elTwo, `Password required`);
  } else {
    if (elTwo.value === elOne.value) {
      showSuccess(elOne);
      showSuccess(elTwo);
    } else {
      showError(elTwo, `Password does not match`);
    }
  }
};

// events
formEl.addEventListener(`submit`, (e) => {
  e.preventDefault();
  // if (usernameEl.value === ``) {
  //   const formControlEl = usernameEl.parentElement;
  //   formControlEl.classList.add(`error`);
  // } else {
  //   const formControlEl = usernameEl.parentElement;
  //   formControlEl.classList.add(`success`);
  // }

  // if (emailEl.value === ``) {
  //   const formControlEl = emailEl.parentElement;
  //   formControlEl.classList.add(`error`);
  // } else {
  //   const formControlEl = emailEl.parentElement;
  //   formControlEl.classList.add(`success`);
  // }

  // if (mobileEl.value === ``) {
  //   const formControlEl = mobileEl.parentElement;
  //   formControlEl.classList.add(`error`);
  // } else {
  //   const formControlEl = mobileEl.parentElement;
  //   formControlEl.classList.add(`success`);
  // }

  // if (passwordEl.value === ``) {
  //   const formControlEl = passwordEl.parentElement;
  //   formControlEl.classList.add(`error`);
  // } else {
  //   const formControlEl = passwordEl.parentElement;
  //   formControlEl.classList.add(`success`);
  // }

  // if (confirmPasswordEl.value === ``) {
  //   const formControlEl = confirmPasswordEl.parentElement;
  //   formControlEl.classList.add(`error`);
  // } else {
  //   const formControlEl = confirmPasswordEl.parentElement;
  //   formControlEl.classList.add(`success`);
  // }
  checkRequired(inputArr);
  checkLength(usernameEl, 4, 16);
  checkLength(mobileEl, 10, 10);
  checkLength(passwordEl, 8, 15);
  checkPasswordMatch(passwordEl, confirmPasswordEl);
});
