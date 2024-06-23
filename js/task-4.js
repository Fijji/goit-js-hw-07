const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const formElements = loginForm.elements;
  const email = formElements.email.value.trim();
  const password = formElements.password.value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email: email,
    password: password,
  };

  console.log(formData);
  loginForm.reset();
});
