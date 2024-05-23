const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const email = document.querySelector('.input-email');
const password = document.querySelector('.input-password');
const authBtn = document.querySelector('.auth-btn');
const togglePwdImg = document.querySelector('.pwd-toggle');

function validate() {
  return (
    (pattern.test(email.value) && password.value.length >= 8) ||
    (!pattern.test(email.value) &&
      password.value.length >= 8 &&
      !nickname.value &&
      confirmPassword.value === password.value)
  );
}

function showError(errMsg, element) {
  if (!element.nextElementSibling.classList.contains('error-input')) {
    const errInput = document.createElement('strong');
    errInput.className = 'error-input';
    errInput.innerText = errMsg;
    element.insertAdjacentElement('afterend', errInput);
    element.classList.add('error-outline');
  }
}

function cleanError(event) {
  const element = event.target;
  if (element.classList.contains('error-outline')) {
    element.classList.remove('error-outline');
    if (element.nextElementSibling.classList.contains('error-input')) {
      element.nextElementSibling.remove();
    }
  }
}

function btnDisabled() {
  authBtn.classList.add('auth-btn--disabled');
}

function btnActive() {
  authBtn.classList.remove('auth-btn--disabled');
}

function checkEmail(event) {
  const email = event.target;
  if (!email.value) {
    const errMsg = '이메일을 입력해주세요';
    showError(errMsg, email);
    btnDisabled();
  } else if (!pattern.test(email.value)) {
    const errMsg = '잘못된 이메일 형식입니다';
    showError(errMsg, email);
    btnDisabled();
  } else if (validate()) {
    btnActive();
  }
}

function checkPassword(event) {
  const password = event.target;
  if (!password.value) {
    const errMsg = '비밀번호를 입력해주세요';
    showError(errMsg, password);
    btnDisabled();
  } else if (password.value.length < 8) {
    const errMsg = '비밀번호를 8자 이상 입력해주세요';
    showError(errMsg, password);
    btnDisabled();
  } else if (validate()) {
    btnActive();
  }
}

function togglePwd(event) {
  const toggle = event.target;
  const password = event.target.parentElement.firstElementChild;
  if (password.type === 'password') {
    password.type = 'text';
    toggle.src = 'images/visible.svg';
  } else {
    password.type = 'password';
    toggle.src = 'images/non-visible.svg';
  }
}

email.addEventListener('focusout', checkEmail);
email.addEventListener('focusin', cleanError);

password.addEventListener('focusout', checkPassword);
password.addEventListener('focusin', cleanError);

togglePwdImg.addEventListener('click', togglePwd);

if (!validate()) {
  btnDisabled();
}

export {
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
};
