document.addEventListener('DOMContentLoaded', function() {
    // Hover effect for navigation menu links
    var navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(function(link) {
        link.addEventListener('mouseenter', function() {
            this.classList.add('hover-effect');
        });
        link.addEventListener('mouseleave', function() {
            this.classList.remove('hover-effect');
        });
    });

    // Hover effect for portfolio items
    var portfolioItems = document.querySelectorAll('.project-item');
    portfolioItems.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            this.classList.add('hover-effect');
        });
        item.addEventListener('mouseleave', function() {
            this.classList.remove('hover-effect');
        });
    });

    // Hover effect for social media icons
    var socialIcons = document.querySelectorAll('.social-media-links a');
    socialIcons.forEach(function(icon) {
        icon.addEventListener('mouseenter', function() {
            this.classList.add('hover-effect');
        });
        icon.addEventListener('mouseleave', function() {
            this.classList.remove('hover-effect');
        });
    });
});