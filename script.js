const row = document.querySelector(".row");
const button = document.querySelector(".button");
const inputValue = document.querySelector(".input");
const container = document.querySelector(".container");

const fetchImageApi = (e) => {
  e.preventDefault();
  fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputValue.value.trim()}`
  )
    .then((request) => request.json())
    .then((data) => {
      let html = "";
      if (data.meals) {
        //Ask to Prem Sir (data.meals) because data.meals or data.meals == true is different
        data.meals.forEach((meal) => {
          html += ` <div class="col-md-4 mt-5" id=${meal.idMeal}>
          <div class="card" style="width: 18rem">
            <img src=${meal.strMealThumb} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
            </div>
          </div>
        </div>`;
        });
      } else {
        html = `<h1 class = "noValue">Sorry, we don't have &nbsp <span class = "inputValue">${inputValue.value.trim()}</span> &nbsp at the moment</h1>`;
      }
      row.innerHTML = html;
      inputValue.value = "";
    });
};

button.addEventListener("click", fetchImageApi);
