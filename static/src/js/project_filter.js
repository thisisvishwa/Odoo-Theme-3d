document.addEventListener('DOMContentLoaded', function() {
    const filterOptions = document.querySelectorAll('.filter-option');
    const projectItems = document.querySelectorAll('.project-item');

    filterOptions.forEach(option => {
        option.addEventListener('click', function() {
            const category = this.getAttribute('data-category');

            // Highlight the selected filter option
            filterOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');

            // Filter the project items
            projectItems.forEach(item => {
                if (category === 'all' || item.classList.contains(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Initialize with all projects visible
    if (filterOptions.length > 0) {
        filterOptions[0].click();
    }
});