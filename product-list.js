const product = [{
        name: "Apple",
        value: "apple"
    },
    {
        name: "Egg",
        value: "egg"
    },
    {
        name: "Chicken and rice",
        value: "chickenAndRice"
    },
    {
        name: "Orange",
        value: "orange"
    },
    {
        name: "Banana yoghurt",
        value: "bananaYoghurt"
    }
];
const productListWrapper = document.querySelector("add-product-form__wrapper");
const productListDropdown = document.getElementById("product");

product.forEach(product => {
    const productListDropdownItem = document.createElement("option");

    productListDropdownItem.classList.add("add-product-form__dropdown-item");
    productListDropdownItem.innerHTML = product.name;
    productListDropdownItem.value = product.value;

    productListDropdown.appendChild(productListDropdownItem);

});

productListWrapper.appendChild(productListDropdown);
