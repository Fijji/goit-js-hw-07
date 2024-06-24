const form = document.querySelector(".login-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;
  const formData = {};

  Array.from(form.elements).forEach((input) => {
    if (input.type !== "submit") {
      const value = input.value.trim();

      if (!value) {
        isValid = false;
        return;
      }
      formData[input.name] = value;
    }
  });

  if (isValid) {
    console.log(formData);
    form.reset();
  } else {
    alert("All form fields must be filled in");
  }
});
