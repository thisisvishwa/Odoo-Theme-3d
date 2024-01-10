document.addEventListener('DOMContentLoaded', function() {
    const animationTriggerPoints = {
        home: document.getElementById('home'),
        projects: document.getElementById('projects'),
        about: document.getElementById('about'),
        contact: document.getElementById('contact')
    };

    function initScrollAnimations() {
        window.addEventListener('scroll', () => {
            for (const section in animationTriggerPoints) {
                if (animationTriggerPoints.hasOwnProperty(section)) {
                    const element = animationTriggerPoints[section];
                    const position = element.getBoundingClientRect();

                    // Check if the element is within the viewport
                    if (position.top < window.innerHeight && position.bottom >= 0) {
                        element.classList.add('in-view');
                    } else {
                        element.classList.remove('in-view');
                    }
                }
            }
        });
    }

    function animateOnScroll(elements, animationClass) {
        elements.forEach(element => {
            const position = element.getBoundingClientRect();
            if (position.top < window.innerHeight && position.bottom >= 0) {
                element.classList.add(animationClass);
            } else {
                element.classList.remove(animationClass);
            }
        });
    }

    // Initialize scroll animations on page load
    initScrollAnimations();
});