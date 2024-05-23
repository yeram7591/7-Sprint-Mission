import {
  pattern,
  email,
  password,
  authBtn,
  togglePwdImg,
  validate,
  showError,
  cleanError,
  btnDisabled,
  btnActive,
  checkEmail,
  checkPassword,
  togglePwd,
} from './login.js';

const nickname = document.querySelector('.input-nickname');
const confirmPassword = document.querySelector('.input-password-confirm');
const togglePwdImg2 = document.querySelector('.pwd-toggle2');

function checkNickname(event) {
  const nickname = event.target;
  if (!nickname.value) {
    const errMsg = '닉네임을 입력해주세요';
    showError(errMsg, nickname);
    btnDisabled();
  } else if (validate()) {
    btnActive();
  }
}

function comparePassword(event) {
  const confirmPassword = event.target;
  if (confirmPassword.value !== password.value) {
    const errMsg = '비밀번호가 일치하지 않습니다';
    showError(errMsg, confirmPassword);
    btnDisabled();
  } else if (validate()) {
    btnActive();
  }
}

email.addEventListener('focusout', checkEmail);
email.addEventListener('focusin', cleanError);

nickname.addEventListener('focusout', checkNickname);
nickname.addEventListener('focusin', cleanError);

password.addEventListener('focusout', checkPassword);
password.addEventListener('focusin', cleanError);

confirmPassword.addEventListener('focusout', comparePassword);
confirmPassword.addEventListener('focusin', cleanError);

togglePwdImg.addEventListener('click', togglePwd);
togglePwdImg2.addEventListener('click', togglePwd);

if (!validate()) {
  btnDisabled();
}
