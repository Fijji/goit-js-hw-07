const inputElement = document.querySelector("#name-input");
const outputElement = document.querySelector("#name-output");

inputElement.addEventListener("input", () => {
  const trimmedInput = inputElement.value.trim();

  outputElement.textContent = trimmedInput ? trimmedInput : "Anonymous";
});
