const addProductButton = document.querySelector(".add-product-form__button");
const chosenProductAmountValue = document.querySelector(".add-product-form__input").value;
const chosenProductListWrapper = document.querySelector(".chosen-product-list__wrapper");

const addProduct = event => {
    let currentProductName = document.querySelector(".add-product-form__dropdown").value;
    
    products.forEach(product =>{
        product.value === currentProductName ?  currentProductName= product.name : "";
    })

    const chosenProduct = document.createElement("li");
    const chosenProductTitle = document.createElement("div");
    const chosenProductListItemDescriptionWrapper =document.createElement("div");
    const chosenProductAmount = document.createElement("div");
    const chosenProductValue = document.createElement("div");

    chosenProduct.classList.add("chosen-product-list__item");
    chosenProductTitle.classList.add("chosen-product-list__item-title");
    chosenProductAmount.classList.add("chosen-product-list__item-description", "chosen-product-list__item-description--weight");
    chosenProductListItemDescriptionWrapper.classList.add("chosen-product-list__item-description-wrapper");
    chosenProductValue.classList.add("chosen-product-list__item-description");

    chosenProductTitle.innerText = currentProductName;
    chosenProductAmount.innerText = chosenProductAmountValue;
    chosenProductValue.innerText = '100'; // generate-kcal-result ??

    chosenProduct.appendChild(chosenProductTitle);
    chosenProductListItemDescriptionWrapper.appendChild(chosenProductAmount);
    chosenProductListItemDescriptionWrapper.appendChild(chosenProductValue);
    chosenProduct.appendChild(chosenProductListItemDescriptionWrapper);



    chosenProductListWrapper.appendChild(chosenProduct);
}

addProduct();
addProductButton.addEventListener("click", addProduct);
