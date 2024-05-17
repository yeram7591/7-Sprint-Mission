const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
const email = document.querySelector('.input-email');
const password = document.querySelector('.input-password');
const authBtn = document.querySelector('.auth-btn');
const togglePwdImg = document.querySelector('.pwd-toggle');

function validate() {
  if (
    email.value &&
    pattern.test(email.value) &&
    password.value &&
    password.value.length >= 8
  )
    return true;
}

function showError(errMsg, errElement) {
  errElement.classList.add('error-outline');
  const errInput = document.createElement('strong');
  errInput.className = 'error-input';
  errInput.innerText = errMsg;
  errElement.insertAdjacentElement('afterend', errInput);
  return errInput;
}

function cleanError(errElement) {
  errElement.classList.remove('error-outline');
  errElement.nextElementSibling.remove();
}

function btnDisabled() {
  authBtn.classList.add('auth-btn--disabled');
}

function btnActive() {
  authBtn.classList.remove('auth-btn--disabled');
}

function checkEmail() {
  const errMsg1 = '이메일을 입력해주세요';
  const errMsg2 = '잘못된 이메일 형식입니다';
  if (!email.value) {
    showError(errMsg1, email);
    btnDisabled();
  } else if (!pattern.test(email.value)) {
    showError(errMsg2, email);
    btnDisabled();
  }

  if (validate()) {
    btnActive();
  }
}

function checkPassword() {
  const errMsg1 = '비밀번호를 입력해주세요';
  const errMsg2 = '비밀번호를 8자 이상 입력해주세요';
  if (!password.value) {
    showError(errMsg1, password);
    btnDisabled();
  } else if (password.value.length < 8) {
    showError(errMsg2, password);
    btnDisabled();
  }

  if (validate()) {
    btnActive();
  }
}

function togglePwd() {
  if (password.type === 'password') {
    password.type = 'text';
    togglePwdImg.src = 'images/visible.svg';
  } else {
    password.type = 'password';
    togglePwdImg.src = 'images/non-visible.svg';
  }
}

togglePwdImg.addEventListener('click', togglePwd);

email.addEventListener('focusout', checkEmail);
email.addEventListener('focusin', () => {
  cleanError(email);
});

password.addEventListener('focusout', checkPassword);
password.addEventListener('focusin', () => {
  cleanError(password);
});