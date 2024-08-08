const menuIcon = document.querySelector('.menu-icon');
const navbarLinks = document.querySelector('.navbar_links');

menuIcon.addEventListener('click', function() {
    navbarLinks.classList.toggle('show');
});

document.addEventListener('click', function(event) {
    if (!navbarLinks.contains(event.target) && !menuIcon.contains(event.target)) {
        navbarLinks.classList.remove('show');
    }
});
