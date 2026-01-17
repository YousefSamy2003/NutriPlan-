import { filterByCountry } from "../ui/DataManager.js";
import { getAllMeals } from "../ui/DataManager.js";

export function EmptySearchDesign() {
  document.getElementById(
    "recipes-grid"
  ).innerHTML = `<div class="flex flex-col items-center justify-center py-12 text-center">
    <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <i class="fa-solid fa-search text-gray-400 text-2xl"></i>
    </div>
    <p class="text-gray-500 text-lg">No recipes found</p>
    <p class="text-gray-400 text-sm mt-2">Try searching for something else</p>
</div>`;
}

export function LoadingSpinnerDesign() {
  let box = `<div class="flex items-center justify-center py-12">
    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
</div> `;
  document.getElementById("recipes-grid").innerHTML = box;
}

export function displayMeals(recipes) {
  let box = ``;
  for (let i = 0; i < recipes.length; i++) {
    box += `
         
         <div
              class="recipe-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
              data-meal-id="${recipes[i].id}"
            >
              <div class="relative h-48 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="${recipes[i].thumbnail}"
                  alt="${recipes[i].name}"
                  loading="lazy"
                />
                <div class="absolute bottom-3 left-3 flex gap-2">
                  <span
                    class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-700"
                  >
                    ${recipes[i].category}
                  </span>
                  <span
                    class="px-2 py-1 bg-emerald-500 text-xs font-semibold rounded-full text-white"
                  >
                    ${recipes[i].area}
                  </span>
                </div>
              </div>
              <div class="p-4">
                <h3
                  class="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1"
                >
                  ${recipes[i].name}
                </h3>
                <p class="text-xs text-gray-600 mb-3 line-clamp-2">
                  ${recipes[i].instructions[0]}
                </p>
                <div class="flex items-center justify-between text-xs">
                  <span class="font-semibold text-gray-900">
                    <i class="fa-solid fa-utensils text-emerald-600 mr-1"></i>
                    ${recipes[i].category}
                  </span>
                  <span class="font-semibold text-gray-500">
                    <i class="fa-solid fa-globe text-blue-500 mr-1"></i>
                    ${recipes[i].area}
                  </span>
                </div>
              </div>
            </div>
           
        
        `;
  }
  document.getElementById("recipes-grid").innerHTML = box;

  if (recipes.length === 0) {
    EmptySearchDesign();
  }
}

// filterByCountry("Canadian");

export function filterByCountryDisplay() {
  const allCountryBtns = document.querySelectorAll("#all-Btn-country button");

  allCountryBtns.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      allCountryBtns.forEach((button) => {
        button.classList.replace("text-white", "text-gray-700");
        button.classList.replace("bg-emerald-600", "bg-gray-100");
      });
      btn.classList.replace("text-gray-700", "text-white");
      btn.classList.replace("bg-gray-100", "bg-emerald-600");

      const country = e.currentTarget.getAttribute("data-area");

      if (country === "AllAreas") {
        let recipes = await getAllMeals("chicken");
        displayMeals(recipes);
        document.getElementById(
          "recipes-count"
        ).innerHTML = `Showing ${recipes.length}  recipes  `;
      } else {
        let recipes = await filterByCountry(country);
        displayMeals(recipes);
        document.getElementById(
          "recipes-count"
        ).innerHTML = `Showing ${recipes.length} ${country} recipes  `;
      }
    });
  });
}
