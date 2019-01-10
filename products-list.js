//funkcja wyswietlajaca liste produktow
function showProducts() {
    //uzyjemy petli forEach do przejscia po wszystki elemntach,
    // bo nie wiemy ile ich bedzie
    products.forEach(function (title) {
        addNewProduct(title);
    });
}
