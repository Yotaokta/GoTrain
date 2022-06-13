window.addEventListener("click", function (e) {
  let menuMobile = document.getElementsByClassName("menu-mobile")[0];
  let menuLogout = document.getElementsByClassName("menu-logout-container")[0];
  let filterMobile = document.getElementsByClassName(
    "nav-job-recent-mobile"
  )[0];

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

  if (e.target.classList.contains("mobile-filter")) {
    changeDisplayAttr(filterMobile, "flex");
  } else {
    changeDisplayAttr(filterMobile, "none");
  }
});

function addMenuToggleClass(element, kelas) {
  element.classList.toggle(kelas);
}

function removeMenuToggleClass(element, kelas) {
  element.classList.remove(kelas);
}

function changeDisplayAttr(element, attr) {
  element.style.display = attr;
}
