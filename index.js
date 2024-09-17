const numberInput = document.getElementById('number');
const addNumberButton = document.querySelector('form button');
const numberBankOutput = document.querySelector('#numberBank output');
const sortOneButton = document.getElementById('sortOne');
const sortAllButton = document.getElementById('sortAll');
const oddsOutput = document.querySelector('#odds output');
const evensOutput = document.querySelector('#evens output');


let numberBank = [];

addNumberButton.addEventListener('click', (event) => {
  event.preventDefault(); 
  const number = parseInt(numberInput.value);
  if (!isNaN(number)) {
    numberBank.push(number); 
    updateNumberBankDisplay(); 
    numberInput.value = ''; 
  }
});

function updateNumberBankDisplay() {
  numberBankOutput.textContent = numberBank.join(', ');
}

sortOneButton.addEventListener('click', () => {
  if (numberBank.length > 0) {
    const numberToSort = numberBank.pop(); 
    sortNumber(numberToSort); 
    updateNumberBankDisplay(); 
  }
});

sortAllButton.addEventListener('click', () => {
  while (numberBank.length > 0) {
    const numberToSort = numberBank.pop(); 
    sortNumber(numberToSort);
  }
  updateNumberBankDisplay(); 
});

function sortNumber(number) {
  if (number % 2 === 0) {
    evensOutput.textContent += number + ', ';
  } else {
    oddsOutput.textContent += number + ', ';
  }
}
