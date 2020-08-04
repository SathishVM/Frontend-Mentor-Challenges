const form = document.querySelector('.form');
const input = document.querySelector('.form-input');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const inputValue = input.value;

  if (!validateEmail(inputValue)) {
    form.classList.add('error');
    form.classList.remove('success');
  } else {
    form.classList.remove('error');
    form.classList.add('success');
  }
});

// Validation Email

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
