const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }

  const userData = {};
  userData.email = email.trim();
  userData.password = password.trim();
  console.log(userData);
  form.reset();
}
