const inputEmail = document.getElementById("emailInput");
const emailErrorContainer = document.getElementById("emailErrorContainer");
const inputPassword = document.getElementById("passInput");
const passwordErrorContainer = document.getElementById("passwordErrorContainer");

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
  

inputEmail.addEventListener("input", validateEmailInput);
inputPassword.addEventListener("input", validatePasswordInput);