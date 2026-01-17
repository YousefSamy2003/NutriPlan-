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
const allLinks = document.querySelectorAll(".nav-link");
const allSections = document.querySelectorAll("section");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    allLinks.forEach((l) => {
      l.classList.remove("active");
      l.classList.remove("bg-emerald-50", "text-emerald-700");
      l.querySelector("span").classList.replace("font-semibold", "font-medium");
    });
    e.currentTarget.classList.add("active");
    e.currentTarget.classList.add("bg-emerald-50", "text-emerald-700");
    e.currentTarget
      .querySelector("span")
      .classList.replace("font-medium", "font-semibold");

    e.preventDefault();

    const targetSectionId = link.getAttribute("data-section");

    allSections.forEach((section) => {
      section.classList.add("hidden");
      allSections.forEach((sec) => {
        if (targetSectionId === section.id) {
          section.classList.remove("hidden");
        }
        if (
          targetSectionId ===
          " meal-categories-section all-recipes-section search-filters-section"
        ) {
          if (
            section.id === "meal-categories-section" ||
            section.id === "all-recipes-section" ||
            section.id === "search-filters-section"
          ) {
            section.classList.remove("hidden");
          }
        }
      });
    });

    let pageName = "home";
    if (targetSectionId.includes("foodlog")) pageName = "log";
    else if (targetSectionId.includes("products")) pageName = "scanner";
    else if (targetSectionId.includes("details")) pageName = "details";
    history.pushState({ sectionId: targetSectionId }, "", `?page=${pageName}`);
  });
});

window.addEventListener("popstate", (e) => {
  if (e.state && e.state.sectionId) {
    const linkToClick = document.querySelector(
      `.nav-link[data-section="${e.state.sectionId}"]`
    );
    if (linkToClick) {
      linkToClick.click();
    }
  } else {
    allLinks[0].click();
  }
});
