const menu_mobile = document.getElementById("menu-mobile");
const input_resume = document.getElementById("input-resume");
const resume_cancel = document.getElementById("resume-cancel");
const button_next = document.querySelectorAll(".next");
const button_prev = document.querySelectorAll(".prev");
const [...form] = document.getElementsByClassName("form");
let index = 0;

menu_mobile.addEventListener("click", function () {
  let navbar_link_mobile = document.getElementById("navbar-link-mobile");
  navbar_link_mobile.classList.toggle("d-flex");
});

input_resume.addEventListener("change", setFileName);
resume_cancel.addEventListener("click", removeResume);

function setFileName(event) {
  let input_file_desc = document.querySelector(".input-file-desc");
  let resume_name = input_file_desc.querySelector("p");
  let label_resume = document.querySelector(".resume");
  let error_file = document.querySelector(".input-file-error");

  for (let file of event.target.files) {
    const file_name = file.name;

    if (isFormatFileValid(file)) {
      resume_name.innerHTML = file_name;
      label_resume.classList.add("d-none");
      input_file_desc.classList.add("d-flex");

      if (error_file.classList.contains("d-flex")) {
        error_file.classList.remove("d-flex");
      }
      return;
    }

    setErrorFileMessage("Format file tidak didukung, hanya .pdf");
  }
}

function isFormatFileValid(file_object) {
  let { name, type } = file_object;
  if (type == "application/pdf" && name.split(".")[1] == "pdf") {
    return true;
  }
  return false;
}

function removeResume() {
  let label_resume = document.querySelector(".resume");
  let input_file_desc = document.querySelector(".input-file-desc");

  label_resume.classList.remove("d-none");
  input_file_desc.classList.remove("d-flex");
}

function setErrorFileMessage(message) {
  let error_message = document.querySelector(".input-file-error");
  error_message.innerHTML = message;
  error_message.classList.add("d-flex");
}

button_next.forEach(showNextForm);
button_prev.forEach(showPrevForm);

function showNextForm(button_next) {
  button_next.addEventListener("click", function () {
    index++;
    if (index == form.length) {
      index -= index;
    }
    //lanjut disini
  });
}

function showPrevForm(button_prev) {
  button_prev.addEventListener("click", function () {
    --index;
    if (index <= 0) {
      index = 0;
    }
  });
}
