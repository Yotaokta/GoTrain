let menu_mobile = document.getElementById("menu-mobile");

menu_mobile.addEventListener("click", function (event) {
  let navbar_link_mobile = document.getElementById("navbar-link-mobile");
  navbar_link_mobile.classList.toggle("d-flex");
});

window.addEventListener("scroll", function (event) {
  let scroll = this.scrollY;
  let job_apply_mobile = document.getElementById("job-apply-mobile");

  if (scroll >= 777) {
    job_apply_mobile.style.display = "flex";
  } else {
    job_apply_mobile.style.display = "none";
  }
});
