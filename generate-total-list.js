const addProductForm = document.querySelector(".add-product-form");
const chosenProductListWrapper = document.querySelector(".chosen-product-list__wrapper");
let summaryKcal=0;

const addProduct = event => {
    event.preventDefault();
    const currentProductValue = document.querySelector(".add-product-form__dropdown").value;
    const chosenProductAmountValue = document.querySelector(".add-product-form__input").value;
    
    
    const currentProduct = products.find(product => product.value === currentProductValue);

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

    const resultInKcalText = currentProduct ? currentProduct.kcalPer100g * chosenProductAmountValue / 100 : "x";
    summaryKcal = summaryKcal + resultInKcalText;

    chosenProductTitle.innerText = currentProduct.name;
    chosenProductAmount.innerText = chosenProductAmountValue + "g";
    chosenProductValue.innerText = `${resultInKcalText} kcal`; 

    chosenProduct.appendChild(chosenProductTitle);
    chosenProductListItemDescriptionWrapper.appendChild(chosenProductAmount);
    chosenProductListItemDescriptionWrapper.appendChild(chosenProductValue);
    chosenProduct.appendChild(chosenProductListItemDescriptionWrapper);


    chosenProductListWrapper.appendChild(chosenProduct);
    

    document.querySelector(".add-product-form").reset();

};

addProductForm.addEventListener("submit", addProduct);
