import {
  RoutingBetweenSections,
  sidebarMobileToggle,
  HandleViewBtn,
} from "./ui/handleLogic.js";
import { Search , searchByBarcode} from "./ui/search.js";
import {
  displayMeals,
  LoadingSpinnerDesign,
  EmptySearchDesign,
} from "./ui/display.js";

import { getAllMeals, filterByCategory } from "./ui/DataManager.js";
import {
  filterByCountryDisplay,
  filterByCategoryDisplay,
  handleProductCategoryBtn,
  displayProduct,
} from "./ui/display.js";

RoutingBetweenSections();
sidebarMobileToggle();
HandleViewBtn();
Search();
filterByCountryDisplay();
let recipes = await getAllMeals("chicken");
displayMeals(recipes);
filterByCategoryDisplay();
handleProductCategoryBtn();
searchByBarcode();


// GetProductByBarcode("5010029000016");

// function searchByBarcode() {
//   const barcodeInput = document.getElementById("barcode-input");

//   const lookupBarcodeBtn = document.getElementById("lookup-barcode-btn");

//   lookupBarcodeBtn.addEventListener("click", async () => {
//     let List = [];
//     const barcode = barcodeInput.value.trim();

//     let product = await GetProductByBarcode(barcode);
//     List.push(product);
//     console.log(List);
//     displayProduct(List);
//     console.log(List);
//   });
// }

// console.log(getProductsByCategory("Snacks"));

/////////////////////////////////////////////////////////////////////////////////////////////////////

// // 1. امسك العناصر الثابتة (اللي مش بتتغير)
// const recipesGrid = document.getElementById("recipes-grid"); // الأب
// const mealDetailsSection = document.getElementById("meal-details");
// const backBtn = document.getElementById("back-to-meals-btn");
// const allSections = document.querySelectorAll("section");

// // 2. Event Delegation: بنسمع للكليك على الأب
// recipesGrid.addEventListener("click", (e) => {
//   // بنشوف هل الكليك حصلت جوه كارت ولا لأ
//   const card = e.target.closest(".recipe-card");

//   if (card) {
//     // لو داس على كارت، هات الـ ID بتاعه
//     const mealId = card.getAttribute("data-meal-id");
//     console.log("Clicked Meal ID:", mealId);

//     // أ: اخفي كل السكاشن
//     allSections.forEach((sec) => sec.classList.add("hidden"));

//     // ب: اظهر سكشن التفاصيل
//     mealDetailsSection.classList.remove("hidden");

//     // ج: هنا المفروض تنادي دالة تجيب تفاصيل الوجبة دي
//     // getMealDetails(mealId); <--- دي لسه هنعملها

//     // تغيير الـ URL (Bonus)
//     history.pushState(
//       { sectionId: "meal-details" },
//       "",
//       `?page=details&id=${mealId}`
//     );
//   }
// });

// // 3. زرار الرجوع (زي ما انت عامله بالظبط)
// backBtn.addEventListener("click", () => {
//   mealDetailsSection.classList.add("hidden");

//   // نرجع نظهر الصفحة الرئيسية
//   document.getElementById("meal-categories-section").classList.remove("hidden");
//   document.getElementById("search-filters-section").classList.remove("hidden");
//   document.getElementById("all-recipes-section").classList.remove("hidden");

//   // نرجع الـ URL
//   history.pushState({ sectionId: "home" }, "", `?page=home`);
// });

// const API_BASE_URL = "https://nutriplan-api.vercel.app/api";
// const USDA_API_KEY = "VEDocPjBRQKxuUUJ6rhVmj765OxS5EljNQeFESVi"; // المفتاح اللي انت بعته

// // ... دوال getAllMeals و filterByCountry القديمة زي ما هي ...

// export async function searchFoodDatabase(query) {
//   try {
//     const response = await fetch(
//       `${API_BASE_URL}/nutrition/search?q=${query}&page=1&limit=24`,
//       {
//         headers: {
//           "x-api-key": USDA_API_KEY, // لازم الهيدر ده عشان الـ API يشتغل
//         },
//       }
//     );
//     const data = await response.json();
//     return data.results; // الـ API ده بيرجع مصفوفة اسمها foods
//   } catch (error) {
//     console.error("Error fetching food data:", error);
//     return [];
//   }
// }

// console.log(await searchFoodDatabase("52813"));
