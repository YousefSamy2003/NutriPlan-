import { getAllMeals } from "../ui/DataManager.js";
import { displayMeals } from "./display.js";
import { EmptySearchDesign } from "./display.js";
import { GetProductByBarcode } from "../ui/DataManager.js";
import { displayProduct } from "./display.js";
import {getProductByname} from "../ui/DataManager.js";

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





export function searchByBarcode() {
  const barcodeInput = document.getElementById("barcode-input");

  const lookupBarcodeBtn = document.getElementById("lookup-barcode-btn");

  lookupBarcodeBtn.addEventListener("click", async () => {
    let List = [];
    const barcode = barcodeInput.value.trim();

    let product = await GetProductByBarcode(barcode);
    List.push(product);
    console.log(List);
    displayProduct(List);
    console.log(List);
  });
}



export function searchProductsByName() {
  const productSearchInput = document.getElementById("product-search-input");
  const searchProductBtn = document.getElementById("search-product-btn");

  searchProductBtn.addEventListener("click", async () => {
    let searchTerm = productSearchInput.value.trim();
    let products = await getProductByname(searchTerm);
    displayProduct(products);
  });
}