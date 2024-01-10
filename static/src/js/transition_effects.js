document.addEventListener('DOMContentLoaded', function() {
    initTransitionEffects();
});

function initTransitionEffects() {
    const links = document.querySelectorAll('.nav-menu a, .social-media-links a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                smoothScrollTo(targetElement);
            }
        });
    });
}

function smoothScrollTo(element) {
    window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': element.offsetTop
    });
}