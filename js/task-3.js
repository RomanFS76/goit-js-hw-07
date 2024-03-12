const inputEl = document.querySelector('#name-input');
const SpanEL = document.querySelector('#name-output');



inputEl.addEventListener('input', handleInput);

function handleInput() { 
    SpanEL.textContent = inputEl.value.trim() || 'Anonimus';
};








