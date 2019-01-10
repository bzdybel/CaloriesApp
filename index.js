const productListItem = document.createElement("li");
const productList = document.querySelector(".product-list");

const productArray = [];

for (let i = 0; i < 5; ++i) {
  const product = document.createElement("div");
  const productDescription = document.createElement("small");
  product.classList.add("product-list__title");
  productDescription.classList.add("product-list__description");

  productListItem.appendChild(product);
  productListItem.appendChild(productDescription);

  productArray[i] = productListItem;
}

for (let i = 0; i < 5; ++i) {
  productList.appendChild(productArray[i]);
}
