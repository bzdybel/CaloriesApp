const addProductButton = document.querySelector(".add-product-form__button");

const addProduct = event => {
    const currentProductName = document.querySelector(".add-product-form__dropdown").value;
    const choosenProductAmountValue = document.querySelector(".add-product-form__input").value;

    const choosenProduct = document.createElement("li");
    choosenProductTitle = document.createElement("div");
    choosenProductAmount = document.createElement("div");
    choosenProductValue = document.createElement("div");

    choosenProduct.classList.add("product-list__item", "product-list__item--choosen-products");
    choosenProductTitle.classList.add("product-list__title--choosen-products");
    choosenProductAmount.classList.add("product-list__description--choosen-products-amount");
    choosenProductValue.classList.add("product-list__description--choosen-products-value");

    choosenProductTitle.innerText(currentProductName);
    choosenProductAmount.innerText(choosenProductAmountValue);
    choosenProductValue.innerText(resultInKcalText); // generate-kcal-result

    choosenProduct.appendChild(choosenProductTitle);
    choosenProduct.appendChild(choosenProductAmount);
    choosenProduct.appendChild(choosenProductValue);


}
addProduct();
addProductButton.addEventListener("click", addProduct);
