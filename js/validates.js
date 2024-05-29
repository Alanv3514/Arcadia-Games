const validateNumber = (numberInput) => {
  return typeof(numberInput) === "number" && !isNaN(numberInput);
}


const validateString = (textInput) => {
  return typeof(textInput) === "string" && !/\d/.test(textInput);
}


const validateMinCharacters = (textInput, min) => {
  return textInput.length > min;
}

const validateMaxCharacters = (textInput, max) => {
  return textInput.length < max;
}



const validateDate = (birthDateInput) => {
  const actualDate = new Date();
  let legalDate = new Date(birthDateInput);
  legalDate.setFullYear(legalDate.getFullYear() + 18);
  return actualDate >= legalDate;
}

const validateFill = (someInput) => {
  return someInput.trim() !== '';
}

const validateMayus = (textInput) => {
  const regexMayuscula = /[A-Z]/;
  return regexMayuscula.test(textInput);
}

const validateMinus = (textInput) => {
  const regexMinuscula = /[a-z]/;
  return regexMinuscula.test(textInput);
}

const validateSimbol = (textInput) => {
  const regexSimbolo = /[^A-Za-z0-9]/;
  return regexSimbolo.test(textInput);
}
const validateEmail = (emailInput) => {
  const regex = /^[\w\.-]+@[\w\.-]+\.\w{2,6}$/;
  return regex.test(emailInput);
}

const isValidName = (inputName)=>{
  let error = []
  let isValid = true
  if(!validateFill(inputName)){
    error.push("*You must fill in the field")
    isValid=false
  }
  if(!validateString(inputName)||(validateSimbol(inputName))){
    error.push("*You should only fill in with letters")
    isValid=false
  }
  if(!validateMinCharacters(inputName,1)){
    error.push("*There must be at least 2 characters")
    isValid=false
  }
  console.log({isValid,error})
  return {isValid,error}
}

const isValidEmail = (inputEmail) => {
  let error = [];
  let isValid = true;
  if (!validateFill(inputEmail)) {
    error.push("*You must fill in the email field");
    isValid = false;
  }
  if (!validateEmail(inputEmail)) {
    error.push("*The email format is not valid");
    isValid = false;
  }
  return { isValid, error };
}

const isValidPassword = (inputPassword) => {
  let error = [];
  let isValid = true;
  if (!validateFill(inputPassword)) {
    error.push("*You must fill in the password field");
    isValid = false;
  }
  if (!validateMayus(inputPassword)) {
    error.push("*The password must contain at least one uppercase letter");
    isValid = false;
  }
  if (!validateMinus(inputPassword)) {
    error.push("*The password must contain at least one lowercase letter");
    isValid = false;
  }
  if (!validateSimbol(inputPassword)) {
    error.push("*The password must contain at least one symbol");
    isValid = false;
  }
  if (!validateMinCharacters(inputPassword, 3)) {
    error.push("*The password must be at least 4 characters long");
    isValid = false;
  }
  if (!validateMaxCharacters(inputPassword, 8)) {
    error.push("*The password must be a maximum of 8 characters long");
    isValid = false;
  }
  return { isValid, error };
}

const isValidDate = (inputDate) => {
  let error = [];
  let isValid = true;
  if (!validateFill(inputDate)) {
    error.push("*You must fill in the date field");
    isValid = false;
  }
  if (!validateDate(inputDate)) {
    error.push("*You must be over 18 years old");
    isValid = false;
  }
  return { isValid, error };
}
