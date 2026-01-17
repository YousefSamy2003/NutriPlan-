// import { LoadingSpinnerDesign } from "../ui/LoadingSpinner.js";

export async function getAllMeals(item) {
  let data = [];
  //   LoadingSpinnerDesign();
  let AllMeals = await fetch(
    `https://nutriplan-api.vercel.app/api/meals/search?q=${item}&page=1&limit=25`
  );
  let dataMeals = await AllMeals.json();
  data = dataMeals.results;
  console.log(data);
  return data;
}

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



export async function filterByCategory(category) {
    let data = [];
    let AllMeals = await fetch(
      `https://nutriplan-api.vercel.app/api/meals/filter?category=${category}&page=1&limit=25`
    );
    let dataMeals = await AllMeals.json();
    data = dataMeals.results;
    console.log(data);
    return data;
}





export async function getProductsByCategory(category) {
  let data = [];
  let AllMeals = await fetch(
    `https://nutriplan-api.vercel.app/api/products/category/${category}
`
  );
  let dataMeals = await AllMeals.json();
  data = dataMeals.results;
  return data;
}