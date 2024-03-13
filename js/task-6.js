function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input[type="number"]');
const btnCreate = document.querySelector('button[data-create]');
const btnDestroy = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');

btnCreate.addEventListener('click', createBoxes);

inputEl.addEventListener('input', handlerInput)

function handlerInput(event) { 
  const amount = event.target.value;
}; 


let boxSizes = 30;

function createBoxes(amount) {

  if (amount < 1 && amount > 100) {
    return;
  };
  
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      boxesEl.append('box');
      box.style.width = `${boxSizes}px`;
      box.style.height = `${boxSizes}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxSizes += 10;
    };
};


// function destroyBoxes();