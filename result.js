const productListDropdown = document.querySelector(".add-product-form__dropdown");
const productKcalInfo = document.querySelector(".add-product-form__kcal-info");
const productKcalOutcome = document.querySelector(".add-product-form__kcal-outcome");

productListDropdown.addEventListener("onchange", resultFunciton() {
    let currentProduct = document.querySelector(".add-product-form__dropdown").value;
    let currentAmount = document.querySelector(".add-product-form__input");

    products.forEeach(product => {
        if (product.value === currentProduct) {
            let result = parseInt(product.kcalPer100g) * currentAmount.value / 100;

            productKcalOutcome.innerText = `results in ${result}`;
            productKcalInfo.innerText = `${product.kcalPer100g} kcal per 100g`;
        }
    })
}, false);
