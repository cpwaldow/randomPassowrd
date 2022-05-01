const btn = document.getElementById('create-password');
const copy = document.getElementById('copy');
const newPassword = document.getElementById('new-password');

const createRandomPassword = () => {
  let chars =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]';
  let passwordLength = 12;
  let password = '';

  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  newPassword.innerText = password;
};

btn.addEventListener('click', createRandomPassword);

const copyPassword = () => {
  navigator.clipboard.writeText(newPassword.innerText);
};

copy.addEventListener('click', copyPassword);
