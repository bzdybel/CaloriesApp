function addNewProduct(title) {

    const productListItem = document.createElement("li");

    productListItem.classList.add("product-list__item");
    productListItem.innerHTML = prepareProduct(title);

    productList.appendChild(productListItem);


    //    console.log(products[title]);

    function prepareProduct(title) {
        return ' <div class="product-list__title">' + title + '</div>' +
            //czemu nie dziala ?
            '<small class="product-list__description"' + products[title] + '</small>';

    }

}


// ta funkcja przygotuje mi zawartosc calego item'a
