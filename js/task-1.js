const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

items.forEach((el, index) => {
  const title = el.querySelector("h2");
  const subItems = el.querySelectorAll("li");

  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${subItems.length}`);
});
