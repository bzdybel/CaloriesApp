const productListItem = document.querySelector(".product-list__item");
const productList = document.querySelector(".product-list");
const apple = document.createElement(div);

apple.className.add("product-list__title");
apple.innerText = "Apple";

const appleDescription = document.createElement(small);

appleDescription.className.add("product-list__description");
appleDescription.innerText = "52kcal per 100g";

productListItem.appendChild(apple);
productListItem.appendChild(appleDescription);

productList.appendChild(productListItem);
