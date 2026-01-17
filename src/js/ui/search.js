import { getAllMeals } from "../ui/DataManager.js";
import { displayMeals } from "./display.js";
import { EmptySearchDesign } from "./display.js";

export function Search() {
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", async () => {
    let searchTerm = searchInput.value.trim();
    let recipes = await getAllMeals(searchTerm);
    if (searchTerm == "") {
      recipes = await getAllMeals("chicken");
      displayMeals(recipes);
      document.getElementById(
        "recipes-count"
      ).innerHTML = `Showing ${recipes.length} recipes  `;
    } else {
      document.getElementById(
        "recipes-count"
      ).innerHTML = `Showing ${recipes.length} recipes for ${searchTerm}`;
      displayMeals(recipes);
    }

    if (recipes.length === 0) {
      EmptySearchDesign();
    }
  });
}
