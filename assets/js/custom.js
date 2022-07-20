const menu_mobile = document.querySelector(".menu-mobile");

window.addEventListener("click", function (event) {
  if (event.target.id == "menu-mobile-button") {
    menu_mobile.classList.toggle("d-flex");
    return;
  }
  menu_mobile.classList.remove("d-flex");
});
