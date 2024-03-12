function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('span.color');


btnChangeColor.addEventListener('click', changeColor);

function changeColor() { 
  spanColor.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
};
