const totalCaloresWrapper = document.querySelector(".total-calories__wrapper");

const totalCalories = document.createElement("strong");
const totalCaloriesDescription = document.createElement("strong");


totalCalories.classList.add("total-calories");
totalCaloriesDescription.classList.add("total-calories__description");

totalCalories.innerText = `You ate ${summaryKcal} calories today`
totalCaloriesDescription.innerText = 'See you tomorrow';

totalCaloresWrapper.appendChild(totalCalories);
totalCaloresWrapper.appendChild(totalCaloriesDescription);
