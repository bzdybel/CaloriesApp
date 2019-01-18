const products = [{
        name: "Apple",
        kcalPer100g: 52,
        value: "apple"
    },
    {
        name: "Egg",
        kcalPer100g: 140,
        value: "egg"

    },
    {
        name: "Banana yoghurt",
        kcalPer100g: 86,
        value: "bananaYoghurt"

    },
    {
        name: "Chicken and rice",
        kcalPer100g: 79,
        value: "chickenAndRice"

    },
    {
        name: "Orange",
        kcalPer100g: 79,
        value: "orange"

    },


];

const productList = document.querySelector(".product-list");
const productListDropdown = document.querySelector(".add-product-form__dropdown");

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



products.forEach(product => {
    const productListDropdownItem = document.createElement("option");

    productListDropdownItem.classList.add("add-product-form__dropdown-item");
    productListDropdownItem.innerText = product.name;
    productListDropdownItem.value = product.value;

    productListDropdown.appendChild(productListDropdownItem);

});
