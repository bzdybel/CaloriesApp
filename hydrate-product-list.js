const products = [{
        name: "Apple",
        kcalPer100g: "52"
    },
    {
        name: "Egg",
        kcalPer100g: "140"
    },
    {
        name: "Banana yoghurt",
        kcalPer100g: "86"
    },
    {
        name: "Chicken and rice",
        kcalPer100g: "79"
    },
    {
        name: "Orange",
        kcalPer100g: "79"
    },

];

const productList = document.querySelector(".product-list");

products.forEach(product => {

    const productListItem = document.createElement("li");
    productListItem.classList.add("product-list__item");

    const productTitle = document.createElement("div");
    productTitle.classList.add("product-list__title");
    productTitle.innerText = product.name;

    const productDescription = document.createElement("small");
    productDescription.classList.add("product-list__description");
    productDescription.innerText = `${product.kcalPer100g} kcal per 100g`;

    productListItem.appendChild(productTitle);
    productListItem.appendChild(productDescription);
    productList.appendChild(productListItem);

});
