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

const charactersCheckbox = document.getElementById('toggle-4');

buttonElement.disabled = true;

const setPasswordLength = event => {
  length = event.target.value;
  passwordLength.textContent = `Length: ${length}`;
  return length;
};

const checkBoxs = () => {
  finalStringCharacters = '';

  if (upperCaseCheckbox.checked || lowerCaseCheckbox.checked || numbersCheckbox.checked || charactersCheckbox.checked) {
    buttonElement.disabled = false;
  } else {
    buttonElement.disabled = true;
  }

  if (upperCaseCheckbox.checked) {
    finalStringCharacters += lettersUpper;
  }

  if (lowerCaseCheckbox.checked) {
    finalStringCharacters += letters;
  }

  if (numbersCheckbox.checked) {
    finalStringCharacters += numbers;
  }

  if (charactersCheckbox.checked) {
    finalStringCharacters += characters;
  }

  //console.log(numbers)

  return finalStringCharacters;
};

const generateIndex = () => {
  finalPassword = '';
  const lengthStringCharacters = finalStringCharacters.length;
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * lengthStringCharacters);
    finalPassword += finalStringCharacters.charAt(index);
  }
  console.log(lengthStringCharacters);
  showPassword.textContent = finalPassword;
};

range.addEventListener('change', setPasswordLength);
upperCaseCheckbox.addEventListener('click', checkBoxs);
lowerCaseCheckbox.addEventListener('click', checkBoxs);
numbersCheckbox.addEventListener('click', checkBoxs);
charactersCheckbox.addEventListener('click', checkBoxs);
buttonElement.addEventListener('click', generateIndex);
