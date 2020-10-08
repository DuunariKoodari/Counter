const buttons = document.querySelectorAll('.counterBtn');
const counter = document.querySelector('#counter');
let count = 0;

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    if (button.classList.contains('increase')) {
      count++;
    } else if (button.classList.contains('decrease')) {
      count--;
    }

    counter.textContent = count;

    if (count < 0) {
      counter.style.color = 'red';
    } else if (count > 0) {
      counter.style.color = 'green';
    } else {
      counter.style.color = '#333333';
    }
  });
});
