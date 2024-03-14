const refs = {
  amountEl: document.querySelector('#controls input'),
  createEl: document.querySelector('button[data-create]'),
  destroyEl: document.querySelector('button[data-destroy]'),
  boxesEl: document.querySelector('#boxes'),
};

refs.createEl.addEventListener('click', onCreateClick);
refs.destroyEl.addEventListener('click', onDestroyClick);

function onCreateClick() {
  let amount = refs.amountEl.value;

  if (amount < 1 || amount > 100) {
    return;
  }

  onDestroyClick();

  createBoxes(amount);
}

function onDestroyClick() {
  refs.boxesEl.innerHTML = '';
  refs.amountEl.value = '';
}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    let elem = document.createElement('div');

    elem.style.width = 30 + 10 * i + 'px';
    elem.style.height = 30 + 10 * i + 'px';
    elem.style.backgroundColor = getRandomHexColor();

    refs.boxesEl.append(elem);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


// const amountEl = document.querySelector('input[type="number"]');
// const btnCreate = document.querySelector('button[data-create]');
// const btnDestroy = document.querySelector('button[data-destroy]');
// const boxesEl = document.querySelector('#boxes');



// btnCreate.addEventListener('click', handlerBtnCreate);
// btnDestroy.addEventListener('click', handlerbtnDestroy);

// function handlerBtnCreate() {
//   let amount = amountEl.value;

//   if (amount < 1 || amount > 100) {
//     return;
//   }

//   handlerbtnDestroy();

//   createBoxes(amount);
// };

// function handlerbtnDestroy() {
//   boxesEl.innerHTML = '';
//   inputEl.value = '';
// };


// let boxSizes = 30;

//     for (let i = 0; i < amount; i++) {
//       let box = document.createElement('div');
//       box.style.width = `${boxSizes}px`;
//       box.style.height = `${boxSizes}px`;
//       box.style.backgroundColor = getRandomHexColor();
//       boxSizes += 10;
//       boxesEl.append('box');
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }