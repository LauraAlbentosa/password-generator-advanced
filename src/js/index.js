// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const showPassword = document.getElementById('show-password');
const passwordLength = document.getElementById('password-length');
const range = document.getElementById('range');
const buttonElement = document.getElementById('button');
const upperCaseCheckbox = document.getElementById('uppercase');
const lowerCaseCheckbox = document.getElementById('toggle-2');
const numbersCheckbox = document.getElementById('toggle-3');
const charactersCheckbox = document.getElementById('toggle-4');

const lettersUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const characters = '!@#$%^&*()_+-={}[]:;<>,.?/';

let finalStringCharacters = '';
let finalPassword = '';
let length = 4;

buttonElement.disabled = true;

const setPasswordLength = event => {
  length = event.target.value;
  passwordLength.textContent = `Length: ${length}`;
  //return length;
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
  //return finalStringCharacters;
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

/*Dividir todo en funciones más pequeñas --- llamar a todos los inputs de golpe 

const inputs = document.querySelectorAll('input:checked') --- esto genera un array de inputs

let length = 16 (por defecto el range está en la mitad que son 16)

const fillAllowCharacters = () =>{
  
}

const setPasswordLength = event =>{
  passwordlength = event.target.value
  lenghtTextElement.tetoContent = passwrod.length  
}

const ableButton = () =>{
  if (upperCaseCheckbox.checked || lowerCaseCheckbox.checked || numbersCheckbox.checked || charactersCheckbox.checked) {
    buttonElement.disabled = false;
  } else {
    buttonElement.disabled = true;
  }

}

SIMPLIFICAR ---- 

1. Se hace un objeto con las posibles strings del string final, y llamo a las partes del objeto igual que los ids de los inputs

const passwordsOptions {
 uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 lowercase = 'abcdefghijklmnopqrstuvwxyz';
 numbers = '0123456789';
 characters = '!@#$%^&*()_+-={}[]:;<>,.?/'
}


const fillAllowedCharacter = () =>{
  allowedCharacters = '';
  const checkBoxes = document.querySelectorAll ('input:checked')
  checkBoxes.forEach(input =>(allowedcharacters  += passwordOptions(input.id)))
}


HAY QUE METER COSAS EN OBJETOS

Para ligar el range y el boton, y que solo se active el boton cuando exista un length:

const disableButton = () =>{
  buttonElement.disabled = !allowedCharacters.length
}

alowedCharacters es la string que tiene los posibles caracteres de la contraseña, se va llenando según se activan botones. Entonces por defeccto es  0, el 0 devuelve false, si no activo ningún botón lo que tengo es buttonElement.disabled = !false(true), en el momento en el que se active algún botón la lenght de allowedCharacters ya va a ser algún número y devolverá treu, por lo que buttonElement.disabled = !true(false). 

*/
