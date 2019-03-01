const totalCaloresWrapper = document.querySelector(".total-calories__wrapper");

const totalCalories = document.createElement("strong");
const totalCaloriesDescription = document.createElement("strong");


totalCalories.classList.add("total-calories");
totalCaloriesDescription.classList.add("total-calories__description");

totalCalories.innerText = "You did not eat anything today"

totalCaloresWrapper.appendChild(totalCalories);
totalCaloresWrapper.appendChild(totalCaloriesDescription);
