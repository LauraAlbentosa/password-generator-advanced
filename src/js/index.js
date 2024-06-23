// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
const lettersUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const characters = '!@#$%^&*()_+-={}[]:;<>,.?/';

let finalStringCharacters = '';

let finalPassword = '';

const showPassword = document.getElementById('show-password');

const passwordLength = document.getElementById('password-length');

const range = document.getElementById('range');

const buttonElement = document.getElementById('button');

const upperCaseCheckbox = document.getElementById('toggle-1');

const lowerCaseCheckbox = document.getElementById('toggle-2');

const numbersCheckbox = document.getElementById('toggle-3');

buttonElement.disabled = true;
range.disabled = true;

const setPasswordLength = event => {
  length = event.target.value;
  passwordLength.textContent = `Length: ${length}`;
  return length;
};

range.addEventListener('change', setPasswordLength);

let indexs = [];

const checkBoxs = () => {
    finalStringCharacters =''
  if (upperCaseCheckbox.checked) {
    range.disabled = false;
    buttonElement.disabled = false;
    finalStringCharacters += lettersUpper;
  } else if (lowerCaseCheckbox.checked) {
    range.disabled = false;
    buttonElement.disabled = false;
    finalStringCharacters += letters;
  } else if (numbersCheckbox.checked) {
    range.disabled = false;
    buttonElement.disabled = false;
    finalStringCharacters += numbers;
  } else {
    range.disabled = true;
    buttonElement.disabled = true;

  }
  console.log(finalStringCharacters)
  return finalStringCharacters
};

const generateIndex = () => {
  finalPassword = '';
  indexs = [];
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * 90);
    indexs.push(index);
  }
  return indexs;
};

const show = () => {
  showPassword.textContent = finalPassword;
};

upperCaseCheckbox.addEventListener('click', checkBoxs);
lowerCaseCheckbox.addEventListener('click', checkBoxs);
numbersCheckbox.addEventListener('click', checkBoxs);
buttonElement.addEventListener('click', show);
