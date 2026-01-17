export function RoutingBetweenSections() {
  const allLinks = document.querySelectorAll(".nav-link");
  const allSections = document.querySelectorAll("section");

  allLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      allLinks.forEach((l) => {
        l.classList.remove("active");
        l.classList.remove("bg-emerald-50", "text-emerald-700");
        l.querySelector("span").classList.replace(
          "font-semibold",
          "font-medium"
        );
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
      history.pushState(
        { sectionId: targetSectionId },
        "",
        `?page=${pageName}`
      );
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
}

export function sidebarMobileToggle() {
  const sidebarToggleBtn = document.getElementById("header-menu-btn");
  const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
  const sidebar = document.getElementById("sidebar");
  sidebarToggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
  sidebarCloseBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
  });
}

export function HandleViewBtn() {
  const gridViewBtn = document.getElementById("grid-view-btn");
  const listViewBtn = document.getElementById("list-view-btn");
  const recipesGrid = document.getElementById("recipes-grid");
  const recipeCards = document.querySelectorAll(".recipe-card");

  console.log(gridViewBtn, listViewBtn, recipesGrid, recipeCards);

  gridViewBtn.addEventListener("click", () => {
    gridViewBtn.classList.add("bg-white", "shadow-sm");
    listViewBtn.classList.remove("bg-white", "shadow-sm");
    recipesGrid.classList.remove("grid-cols-2", "gap-4");
    recipesGrid.classList.add("grid-cols-4", "gap-5");
    //    recipeCards.forEach((card) => {
    //     card.classList.remove("flex", "flex-row", "h-40");
    //   });
  });
  listViewBtn.addEventListener("click", () => {
    listViewBtn.classList.add("bg-white", "shadow-sm");
    gridViewBtn.classList.remove("bg-white", "shadow-sm");
    recipesGrid.classList.remove("grid-cols-4", "gap-5");
    recipesGrid.classList.add("grid-cols-2", "gap-4");
    //   recipeCards.forEach((card) => {
    //     card.classList.add("flex", "flex-row", "h-40");
    //   });
  });
}
