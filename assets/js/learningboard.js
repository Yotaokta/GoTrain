function showDropdown() {
    document.getElementById("profile-dropdown").classList.toggle("d-block");
}

window.onclick = function (event) {
    if (!event.target.matches('.profile-picture')) {
        var dropdowns = document.getElementsByClassName("dropdown-container");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('d-block')) {
                openDropdown.classList.remove('d-block');
            }
        }
    }
}