document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const navbarItems = document.querySelector('.navbar-items');

    navbar.addEventListener('click', function() {
        navbarItems.classList.toggle('active');
    });
});
