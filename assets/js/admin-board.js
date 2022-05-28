window.addEventListener('click', function (params) {
    let popup = document.getElementById('menu-popup');

    if (params.target.classList.contains('avatar')) {
        popup.classList.toggle('d-block');
    }
    else {
        popup.classList.remove('d-block');
    }
});