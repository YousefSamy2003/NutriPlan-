import {
  RoutingBetweenSections,
  sidebarMobileToggle,
  HandleViewBtn,
} from "./ui/handleLogic.js";
import { Search } from "./ui/search.js";
import { displayMeals, LoadingSpinnerDesign } from "./ui/display.js";
/**
 * NutriPlan - Main Entry Point
 *
 * This is the main entry point for the application.
 * Import your modules and initialize the app here.
 */

// const allLinks = document.querySelectorAll(".nav-link ");
// const allSections = document.querySelectorAll("section");
// allLinks.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     allLinks.forEach((link) => {
//       link.classList.remove("active");
//       link.classList.remove("bg-emerald-50", "text-emerald-700");
//       link
//         .querySelector("span")
//         .classList.replace("font-semibold", "font-medium");
//     });
//     e.currentTarget.classList.add("active");
//     e.currentTarget.classList.add("bg-emerald-50", "text-emerald-700");
//     e.currentTarget
//       .querySelector("span")
//       .classList.replace("font-medium", "font-semibold");
//     e.preventDefault();
//     allSections.forEach((section) => {
//       section.classList.add("hidden");
//       allSections.forEach((section) => {
//         if (link.getAttribute("data-section") === section.id) {
//           section.classList.remove("hidden");
//         }
//         if (
//           link.getAttribute("data-section") ===
//           " meal-categories-section all-recipes-section search-filters-section"
//         ) {
//           if (
//             section.id === "meal-categories-section" ||
//             section.id === "all-recipes-section" ||
//             section.id === "search-filters-section"
//           ) {
//             section.classList.remove("hidden");
//           }
//         }
//       });
//     });
//   });

// });

// Handle Routing Betwwen Sections

RoutingBetweenSections();
sidebarMobileToggle();
HandleViewBtn();
Search();
let recipes = await getAllMeals("chicken");
displayMeals(recipes);

//                  display
// export function EmptySearchDesign() {
//   document.getElementById(
//     "recipes-grid"
//   ).innerHTML = `<div class="flex flex-col items-center justify-center py-12 text-center">
//     <div class="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
//         <i class="fa-solid fa-search text-gray-400 text-2xl"></i>
//     </div>
//     <p class="text-gray-500 text-lg">No recipes found</p>
//     <p class="text-gray-400 text-sm mt-2">Try searching for something else</p>
// </div>`;
// }

// export function LoadingSpinnerDesign() {
//   let box = `<div class="flex items-center justify-center py-12">
//     <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
// </div> `;
//   document.getElementById("recipes-grid").innerHTML = box;
// }
// export function displayMeals(recipes) {
//   let box = ``;
//   for (let i = 0; i < recipes.length; i++) {
//     box += `
         
//          <div
//               class="recipe-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
//               data-meal-id="${recipes[i].id}"
//             >
//               <div class="relative h-48 overflow-hidden">
//                 <img
//                   class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   src="${recipes[i].thumbnail}"
//                   alt="${recipes[i].name}"
//                   loading="lazy"
//                 />
//                 <div class="absolute bottom-3 left-3 flex gap-2">
//                   <span
//                     class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-700"
//                   >
//                     ${recipes[i].category}
//                   </span>
//                   <span
//                     class="px-2 py-1 bg-emerald-500 text-xs font-semibold rounded-full text-white"
//                   >
//                     ${recipes[i].area}
//                   </span>
//                 </div>
//               </div>
//               <div class="p-4">
//                 <h3
//                   class="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1"
//                 >
//                   ${recipes[i].name}
//                 </h3>
//                 <p class="text-xs text-gray-600 mb-3 line-clamp-2">
//                   ${recipes[i].instructions[0]}
//                 </p>
//                 <div class="flex items-center justify-between text-xs">
//                   <span class="font-semibold text-gray-900">
//                     <i class="fa-solid fa-utensils text-emerald-600 mr-1"></i>
//                     ${recipes[i].category}
//                   </span>
//                   <span class="font-semibold text-gray-500">
//                     <i class="fa-solid fa-globe text-blue-500 mr-1"></i>
//                     ${recipes[i].area}
//                   </span>
//                 </div>
//               </div>
//             </div>
           
        
//         `;
//   }
//   document.getElementById("recipes-grid").innerHTML = box;

//   if (recipes.length === 0) {
//     EmptySearchDesign();
//   }
// }

/// get all meals function

export async function getAllMeals(item) {
  let data = [];
  LoadingSpinnerDesign();
  let AllMeals = await fetch(
    `https://nutriplan-api.vercel.app/api/meals/search?q=${item}&page=1&limit=25`
  );
  let dataMeals = await AllMeals.json();
  data = dataMeals.results;
  console.log(data);
  return data;
}

// search functionality





export async function filterByCountry(country) {
    let data = [];
    let AllMeals = await fetch(
        `https://nutriplan-api.vercel.app/api/meals/filter?area=${country}&page=1&limit=25`
    );
    let dataMeals = await AllMeals.json();
    data = dataMeals.results;
    console.log(data);
    return data;
}
filterByCountry("Canadian");