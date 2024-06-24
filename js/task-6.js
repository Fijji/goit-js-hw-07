function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (amount) => {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = ""; 
  const fragment = document.createDocumentFragment();
  let initialSize = 30;
  for (let i = 0; i < amount; i++) {
    const size = initialSize + i * 10;
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
  }
  boxesContainer.appendChild(fragment); 
};

const destroyBoxes = () => {
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";
};

document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector('#controls input[type="number"]');
  const createButton = document.querySelector("[data-create]");
  const destroyButton = document.querySelector("[data-destroy]");

  createButton.addEventListener("click", () => {
    const numBoxes = parseInt(input.value);
    if (numBoxes >= 1 && numBoxes <= 100) {
      createBoxes(numBoxes);
      input.value = ""; 
    } 
  });

  destroyButton.addEventListener("click", destroyBoxes);
});
