let menu_mobile = document.getElementById("menu-mobile");

menu_mobile.addEventListener("click", function (event) {
  let navbar_link_mobile = document.getElementById("navbar-link-mobile");
  navbar_link_mobile.classList.toggle("d-flex");
});

window.addEventListener("click", function (event) {
  let contract_filter = document.getElementById("contract-filter");
  if (event.target.classList.contains("contract")) {
    contract_filter.classList.toggle("d-flex");
  } else {
    contract_filter.classList.remove("d-flex");
  }
});

let filter_mobile = document.getElementById("filter-mobile");

filter_mobile.addEventListener("click", function () {
  let jobs_filter_mobile = document.getElementById("jobs-filter-mobile");
  jobs_filter_mobile.classList.toggle("height");
});
