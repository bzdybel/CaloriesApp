const productKcalInfo = document.querySelector(".add-product-form__kcal-info");
const productKcalOutcome = document.querySelector(".add-product-form__kcal-outcome");
const productAmountInput = document.querySelector(".add-product-form__input");
const resultInKcalText;

const updateKcalResult = event => {

    const currentProductValue = document.querySelector(".add-product-form__dropdown").value;
    const currentProductAmountValue = document.querySelector(".add-product-form__input").value;

    const currentProduct = products.find(product => product.value === currentProductValue);

    const kcalPer100gText = currentProduct ? currentProduct.kcalPer100g : "x";
    const resultInKcalText = currentProduct ? currentProduct.kcalPer100g * currentProductAmountValue / 100 : "x";
    productKcalInfo.innerText = `${kcalPer100gText} kcal per 100g`;
    productKcalOutcome.innerText = `results in ${resultInKcalText} kcal`;

}
updateKcalResult();
productListDropdown.addEventListener("change", updateKcalResult);
productAmountInput.addEventListener("change", updateKcalResult);
