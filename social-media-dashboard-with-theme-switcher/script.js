const checkbox = document.querySelector('input[name=checkbox]');
const stylesheet = document.querySelector('#toggle-stylesheet');
const toggleBall = document.querySelector('.label .ball');

checkbox.addEventListener('change', function () {
  if (this.checked) {
    stylesheet.href = './css/dark-style.css';
    toggleBall.classList.remove('leftmove');
    toggleBall.classList.add('rightmove');
  } else {
    stylesheet.href = './css/light-style.css';
    toggleBall.classList.remove('rightmove');
    toggleBall.classList.add('leftmove');
  }
});
