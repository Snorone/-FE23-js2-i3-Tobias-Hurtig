type Item = {
  images: any;
  title: string;
  description: string;
  rating: number;
  stock: number;
  category: string;
};

export async function getItems(): Promise<Item[]> {
  const url = "https://dummyjson.com/products";
  const res = await fetch(url);
  const items = await res.json();

  return items as Item[];
}

export async function searchItems(userSearch: string): Promise<Item> {
  const url = "https://dummyjson.com/products/search?q=" + userSearch;
  const res = await fetch(url);
  const item = await res.json();

  const itemArray = item.products;

  return itemArray;
}

export function displayItems(items: Item[]): void {
  const container = document.querySelector(".bigsection") as HTMLDivElement;
  container.innerHTML = "";
  items.forEach((item) => {
    createItemcard(item, container as HTMLDivElement);
    const imgItem = item.images[0];
    return imgItem;
  });
}

function createItemcard(
  { images, title, description, rating, stock, category }: Item,
  container: HTMLDivElement
): void {
  const card = document.createElement("div");
  const imgEl = document.createElement("img");
  const titleEl = document.createElement("h2");
  const descriptionEl = document.createElement("p");
  const ratingEl = document.createElement("p");
  const stockEl = document.createElement("p");
  const categoryEl = document.createElement("p");
  const btnEl = document.createElement("button") as HTMLButtonElement;

  card.className = "containerdiv";
  imgEl.className = "imgsize";

  imgEl.src = images[0];
  titleEl.innerText = title;
  descriptionEl.className = "pclass";
  descriptionEl.innerHTML = "<b>Description: </b> " + description;
  ratingEl.className = "pclass";
  ratingEl.innerHTML = "<b>Rating: </b>" + rating;
  stockEl.className = "pclass";
  stockEl.innerHTML = "<b>Stock: </b>" + stock;
  categoryEl.className = "pclass";
  categoryEl.innerHTML = "<b>Category: </b>" + category;
  btnEl.innerText = "add to cart";
  btnEl.className = "btnclass";

  if (stock < 10) {
    stockEl.className = "warning";
    stockEl.innerText = "Stock: warning only " + stock + " left";
  }
  card.append(
    imgEl,
    titleEl,
    descriptionEl,
    ratingEl,
    stockEl,
    categoryEl,
    btnEl
  );
  container.append(card);
}
