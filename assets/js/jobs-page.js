window.addEventListener("click", function (e) {
  let menuMobile = document.getElementsByClassName("menu-mobile")[0];
  let menuLogout = document.getElementsByClassName("menu-logout-container")[0];

  if (
    e.target.classList.contains("button-menu-mobile") ||
    e.target.classList.contains("bi-three-dots")
  ) {
    addMenuToggleClass(menuMobile, "height");
  } else {
    removeMenuToggleClass(menuMobile, "height");
  }

  if (e.target.classList.contains("avatar")) {
    addMenuToggleClass(menuLogout, "d-block");
  } else {
    removeMenuToggleClass(menuLogout, "d-block");
  }
});

function addMenuToggleClass(element, kelas) {
  element.classList.toggle(kelas);
}

function removeMenuToggleClass(element, kelas) {
  element.classList.remove(kelas);
}
