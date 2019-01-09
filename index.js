const productListItem = document.querySelector("li");
const productList = document.querySelector(".product-list");

const orange = document.createElement("div");
const orangeDescription = document.createElement("small");

orange.classList.add("product-list__title");
orange.innerText = "Orange";

orangeDescription.classList.add("product-list__description");
orangeDescription.innerText = "48kcal per 100g";

productListItem.appendChild(orange);
productListItem.appendChild(orangeDescription);
productList.appendChild(productListItem);
