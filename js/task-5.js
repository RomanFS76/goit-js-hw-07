function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnChangeColor = document.querySelector('button.change-color');
const spanColorEl = document.querySelector('span.color');


btnChangeColor.addEventListener('click', changeColor);


function changeColor() { 
  const getColor = getRandomHexColor();
  spanColorEl.textContent = getColor;
  document.body.style.backgroundColor = getColor;
};
