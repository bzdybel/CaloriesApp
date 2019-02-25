const addProductButton = document.querySelector(".add-product-form__button");
const chosenProductListItemDescriptionWrapper = document.querySelector(".chosen-product-list__item-description-wrapper");

const addProduct = event => {
    const currentProductName = document.querySelector(".add-product-form__dropdown").value;
    const choosenProductAmountValue = document.querySelector(".add-product-form__input").value;

    const choosenProduct = document.createElement("li");
    const choosenProductTitle = document.createElement("div");
    const choosenProductAmount = document.createElement("div");
    const choosenProductValue = document.createElement("div");

    choosenProduct.classList.add("chosen-product-list__item");
    choosenProductTitle.classList.add("chosen-product-list__item-title");
    choosenProductAmount.classList.add("chosen-product-list__item-description", "chosen-product-list__item-description--weight");
    choosenProductValue.classList.add("chosen-product-list__item-description");

    choosenProductTitle.innerText(currentProductName);
    choosenProductAmount.innerText(choosenProductAmountValue);
    choosenProductValue.innerText(resultInKcalText); // generate-kcal-result ??

    choosenProduct.appendChild(choosenProductTitle);
    chosenProductListItemDescriptionWrapper.appendChild(choosenProductAmount);
    chosenProductListItemDescriptionWrapper.appendChild(choosenProductValue);
    choosenProduct.appendChild(chosenProductListItemDescriptionWrapper);


}
addProduct();
addProductButton.addEventListener("sumbit", addProduct);
