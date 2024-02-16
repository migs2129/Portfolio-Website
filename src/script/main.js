document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var nav = document.querySelector('.nav');
        var scrolled = window.scrollY > 0;

        if (scrolled) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});
/** For Menu Bar **/
const toggleButton = document.querySelector('.nav-toggle');
const toggleOff = document.querySelector('.nav-toggle-off');
const navBar = document.getElementById('burger-nav-content');

toggleButton.addEventListener('click', function () {
    navBar.classList.add('show');
});

toggleOff.addEventListener('click', function () {
    navBar.classList.remove('show');
});