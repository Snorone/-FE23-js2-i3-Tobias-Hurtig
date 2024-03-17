import { getItems, searchItems, displayItems } from "./modules/items.ts";

getItems();

const mainForm = document.querySelector("#mainform") as HTMLFormElement;

mainForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let userInput = document.querySelector("#searchInput") as HTMLInputElement;

  console.log(userInput.value);
  searchItems(userInput.value).then(displayItems);
  mainForm.reset();
});
