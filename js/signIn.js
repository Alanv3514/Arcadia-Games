const form = document.getElementById("formSignIn");
const inputName = document.getElementById("nameInput");
const nameErrorContainer = document.getElementById("nameErrorContainer");
const inputLastName = document.getElementById("lastNameInput");
const lastNameErrorContainer = document.getElementById("lastNameErrorContainer");
const inputEmail = document.getElementById("emailInput");
const emailErrorContainer = document.getElementById("emailErrorContainer");
const inputPassword = document.getElementById("passInput");
const passwordErrorContainer = document.getElementById("passwordErrorContainer");
const inputDate = document.getElementById("dateInput");
const dateErrorContainer = document.getElementById("dateErrorContainer");


const validateFirstNameInput = (e) => {
    const validation = isValidName(e.target.value);
    nameErrorContainer.innerHTML = '';

    if (validation.isValid) {
        inputName.classList.remove('invalid');
    } else {
        inputName.classList.add('invalid');

        validation.error.forEach((error) => {
        const errorElement = document.createElement('p');
        errorElement.textContent = error;
        errorElement.classList.add('error-message'); 
        nameErrorContainer.appendChild(errorElement);
        });
    }
}
const validateLastNameInput = (e) => {
    const validation = isValidName(inputLastName.value);
    lastNameErrorContainer.innerHTML = '';
    if (!validation.isValid) {
      inputLastName.classList.add('invalid');
      validation.error.forEach((error) => {
        const errorElement = document.createElement('p');
        errorElement.textContent = error;
        errorElement.classList.add('error-message');
        lastNameErrorContainer.appendChild(errorElement);
      });
    } else {
      inputLastName.classList.remove('invalid');
    }
  }
  
  const validateEmailInput = (e) => {
    const validation = isValidEmail(inputEmail.value);
    emailErrorContainer.innerHTML = '';
    if (!validation.isValid) {
      inputEmail.classList.add('invalid');
      validation.error.forEach((error) => {
        const errorElement = document.createElement('p');
        errorElement.textContent = error;
        errorElement.classList.add('error-message');
        emailErrorContainer.appendChild(errorElement);
      });
    } else {
      inputEmail.classList.remove('invalid');
    }
  }
  
  const validatePasswordInput = (e) => {
    const validation = isValidPassword(inputPassword.value);
    passwordErrorContainer.innerHTML = '';
    if (!validation.isValid) {
      inputPassword.classList.add('invalid');
      validation.error.forEach((error) => {
        const errorElement = document.createElement('p');
        errorElement.textContent = error;
        errorElement.classList.add('error-message');
        passwordErrorContainer.appendChild(errorElement);
      });
    } else {
      inputPassword.classList.remove('invalid');
    }
  }
  
  const validateDateInput = (e) => {
    const validation = isValidDate(inputDate.value);
    dateErrorContainer.innerHTML = '';
    if (!validation.isValid) {
      inputDate.classList.add('invalid');
      validation.error.forEach((error) => {
        const errorElement = document.createElement('p');
        errorElement.textContent = error;
        errorElement.classList.add('error-message');
        dateErrorContainer.appendChild(errorElement);
      });
    } else {
      inputDate.classList.remove('invalid');
    }
  }
  
  // Asegúrate de agregar los event listeners correspondientes para cada input
// Asegúrate de agregar los event listeners correspondientes para cada input
inputLastName.addEventListener("input", validateLastNameInput);
inputEmail.addEventListener("input", validateEmailInput);
inputPassword.addEventListener("input", validatePasswordInput);
inputDate.addEventListener("input", validateDateInput);
inputName.addEventListener("input", validateFirstNameInput);




form.addEventListener("submit", function(e) {
    e.preventDefault();
    validateFirstNameInput(e);
    validateLastNameInput(e);
    validateEmailInput(e);
    validatePasswordInput(e);
    validateDateInput(e);
    // Aquí puedes agregar la lógica para decidir si el formulario se envía o no
  });