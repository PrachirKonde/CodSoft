// script.js
const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let displayValue = '';

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const value = event.target.innerText;

    if (value === 'C') {
      displayValue = '';
    } else if (value === '=') {
      try {
        displayValue = eval(displayValue);
      } catch {
        displayValue = 'Error';
      }
    } else {
      displayValue += value;
    }
    display.value = displayValue;
  });
});
