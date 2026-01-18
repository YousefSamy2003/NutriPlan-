import { filterByCountry, filterByCategory } from "../ui/DataManager.js";
import { getAllMeals } from "../ui/DataManager.js";
import {getProductsByCategory} from "../ui/DataManager.js";
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

export function filterByCategoryDisplay() {
  const categoriesGrid = document.querySelectorAll(
    "#categories-grid .category-card"
  );

  console.log(categoriesGrid);

  categoriesGrid.forEach((category) => {
    category.addEventListener("click", async (e) => {
      const categoryValue = category.getAttribute("data-category");
      let recipes = await filterByCategory(categoryValue);
      displayMeals(recipes);
      document.getElementById(
        "recipes-count"
      ).innerHTML = `Showing ${recipes.length} ${categoryValue} recipes  `;
    });
  });
}




export  function displayProduct(product) {
  let box = ``;
  for (let i = 0; i < product.length; i++) {
    box += `<div
                class="product-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
                data-barcode="${product[i].barcode}"
              >
                <div
                  class="relative h-40 bg-gray-100 flex items-center justify-center overflow-hidden"
                >
                  <img
                    class="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    src="${product[i].image}"
                    alt="${product[i].name}"
                    loading="lazy"
                  />

                  <!-- Nutri-Score Badge -->
                  <div
                    class="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded uppercase"
                  >
                    Nutri-Score ${product[i].nutritionGrade ?` ${product[i].nutritionGrade.toUpperCase()}` : ""}
                  </div>

                  <!-- NOVA Badge -->
                  <div
                    class="absolute top-2 right-2 bg-lime-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center"
                    title="NOVA 2"
                  >
                        ${
                          product[i].novaGroup ? ` ${product[i].novaGroup}` : ""
                        }                  
                  </div>
                </div>

                <div class="p-4">
                  <p
                    class="text-xs text-emerald-600 font-semibold mb-1 truncate"
                  >
                    ${product[i].brand}
                  </p>
                  <h3
                    class="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-emerald-600 transition-colors"
                  >
                    ${product[i].name}
                  </h3>

                  <div
                    class="flex items-center gap-3 text-xs text-gray-500 mb-3"
                  >
                    <span
                      ><i class="fa-solid fa-weight-scale mr-1"></i>${
                        product[i].nutrients.fat
                      }</span
                    >
                    <span
                      ><i class="fa-solid fa-fire mr-1"></i>${
                        product[i].nutrients.calories
                      }/100g</span
                    >
                  </div>

                  <!-- Mini Nutrition -->
                  <div class="grid grid-cols-4 gap-1 text-center">
                    <div class="bg-emerald-50 rounded p-1.5">
                      <p class="text-xs font-bold text-emerald-700">${
                        product[i].nutrients.protein
                      }g</p>
                      <p class="text-[10px] text-gray-500">Protein</p>
                    </div>
                    <div class="bg-blue-50 rounded p-1.5">
                      <p class="text-xs font-bold text-blue-700">${
                        product[i].nutrients.carbs
                      }g</p>
                      <p class="text-[10px] text-gray-500">Carbs</p>
                    </div>
                    <div class="bg-purple-50 rounded p-1.5">
                      <p class="text-xs font-bold text-purple-700">${
                        product[i].nutrients.fat
                      }g</p>
                      <p class="text-[10px] text-gray-500">Fat</p>
                    </div>
                    <div class="bg-orange-50 rounded p-1.5">
                      <p class="text-xs font-bold text-orange-700">${
                        product[i].nutrients.sugar
                      }g</p>
                      <p class="text-[10px] text-gray-500">Sugar</p>
                    </div>
                  </div>
                </div>
              </div>`;
  }

  document.getElementById("products-grid").innerHTML = box;
}





export function handleProductCategoryBtn() {
  const productCategoryBtns = document.querySelectorAll(
    ".product-category-btn"
  );

  productCategoryBtns.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const category = btn.getAttribute("data-category");
      let products = await getProductsByCategory(category);
      console.log(products);
      displayProduct(products);
    });
  });
}
