const productKcalInfo = document.querySelector(".add-product-form__kcal-info");
const productKcalOutcome = document.querySelector(".add-product-form__kcal-outcome");
const productInput = document.querySelector(".add-product-form__input");


const updateKcalResult = event => {

    const currentProductValue = document.querySelector(".add-product-form__dropdown").value;
    const currentAmountValue = document.querySelector(".add-product-form__input").value;

    const currentProduct = products.find(product => product.value === currentProductValue);

    const kcalPer100gText = currentProduct ? currentProduct.kcalPer100g : "x";
    const resultInX = currentProduct ? parseInt(currentProduct.kcalPer100g) * currentAmountValue / 100 : "x";

    productKcalInfo.innerText = `${kcalPer100gText} kcal per 100g`;
    productKcalOutcome.innerText = `results in ${resultInX} kcal`;

}
updateKcalResult();
productListDropdown.addEventListener("change", updateKcalResult);
productInput.addEventListener("change", updateKcalResult);
