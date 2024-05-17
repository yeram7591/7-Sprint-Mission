const email = document.querySelector('.input-email');
const password = document.querySelector('input.input-password');
const label = document.querySelector('.label-password');
const pattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;

function showError(errMsg, errElement) {
  errElement.classList.add('error-outline');
  const errInput = document.createElement('strong');
  errInput.className = 'error-input';
  errInput.innerText = errMsg;
  errElement.insertAdjacentElement('afterend', errInput);
}

function cleanError(errElement) {
  if (errElement.nextElementSibling !== label) {
    errElement.classList.remove('error-outline');
    errElement.nextElementSibling.remove();
  }
}

function checkEmail() {
  const errMsg1 = '이메일을 입력해주세요';
  const errMsg2 = '잘못된 이메일 형식입니다';
  if (!email.value) {
    showError(errMsg1, email);
  } else if (!pattern.test(email.value)) {
    showError(errMsg2, email);
  }
}

function checkPassword() {
  const errMsg1 = '비밀번호를 입력해주세요';
  const errMsg2 = '비밀번호를 8자 이상 입력해주세요';
  if (!password.value) {
    showError(errMsg1, password);
  } else if (password.value.length < 8) {
    showError(errMsg2, password);
  }
}

email.addEventListener('focusin', () => {
  cleanError(email);
});

email.addEventListener('focusout', checkEmail);

password.addEventListener('focusin', () => {
  cleanError(password);
});

password.addEventListener('focusout', checkPassword);
