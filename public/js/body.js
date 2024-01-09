document.addEventListener("DOMContentLoaded", function(){
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarMenu = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', function() {
        // Check if navbarMenu is not collapsed (since the click event is about to toggle the state)
        if (!navbarMenu.classList.contains('show')) {
            // Add a custom class to increase navbar height
            document.querySelector('.navbar').classList.add('navbar-expanded');
        } else {
            // Remove the custom class
            document.querySelector('.navbar').classList.remove('navbar-expanded');
        }
    });
});
