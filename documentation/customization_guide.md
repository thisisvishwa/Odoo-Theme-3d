# Customization Guide for 3DWebDevPortfolio_v17 Theme

## Introduction
This guide provides instructions on how to customize the `3DWebDevPortfolio_v17` theme for Odoo Version 17 CE. Follow these steps to tailor the theme to fit your branding and personal preferences.

## Prerequisites
Before customizing the theme, ensure you have:
- Installed the `3DWebDevPortfolio_v17` theme.
- Basic knowledge of HTML, CSS, and JavaScript.
- Access to the theme files.

## Customizing Color Scheme
To change the color scheme, edit the SCSS variables in `static/src/scss/theme.scss`.

```scss
$primary-color: #yourPrimaryColor; // Replace with your primary color
$secondary-color: #yourSecondaryColor; // Replace with your secondary color
```

## Customizing Typography
To customize typography, modify the font variables in `static/src/scss/theme.scss`.

```scss
$font-family: 'YourFontFamily', sans-serif; // Replace with your font family
$font-size-base: 16px; // Adjust base font size if necessary
```

## Customizing the Logo
Replace the `static/src/img/logo.png` file with your custom logo. Ensure the logo dimensions are appropriate for the header space.

## Customizing the Navigation Menu
To customize the navigation menu links, edit `views/templates.xml`.

```xml
<template id="template_header">
    <!-- Add or remove menu items here -->
    <ul class="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</template>
```

## Customizing the Home Page
To customize the hero section and introduction, edit `views/templates.xml`.

```xml
<template id="template_home_page">
    <!-- Customize hero section and introduction here -->
    <div class="hero-section">
        <!-- Your content here -->
    </div>
    <div class="intro-section">
        <!-- Your content here -->
    </div>
</template>
```

## Customizing Project Filters
To add or remove project filter categories, edit `static/src/js/project_filter.js`.

```javascript
const filterCategories = ['WebGL', 'Three.js', 'Babylon.js']; // Modify categories as needed
```

## Customizing Profile and Skills
To update the profile picture and skills list, edit `views/templates.xml`.

```xml
<template id="template_about_page">
    <!-- Update profile picture and biography here -->
    <img src="/static/src/img/profile_picture.png" alt="Profile Picture" class="profile-picture">
    <div class="bio-section">
        <!-- Your biography here -->
    </div>
    <ul class="skills-list">
        <!-- List your skills here -->
    </ul>
</template>
```

## Customizing Contact Form
To customize the contact form fields, edit `views/templates.xml`.

```xml
<template id="template_contact_page">
    <form action="/contact/submit" method="post" class="contact-form">
        <!-- Customize form fields here -->
    </form>
</template>
```

## Customizing Social Media Links
To update social media links, edit `views/templates.xml`.

```xml
<template id="template_contact_page">
    <!-- Add or remove social media links here -->
    <div class="social-media-links">
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank">
            <!-- LinkedIn Icon -->
        </a>
        <a href="https://github.com/yourprofile" target="_blank">
            <!-- GitHub Icon -->
        </a>
    </div>
</template>
```

## Customizing Interactive Elements
To customize scroll animations, hover effects, and transition effects, edit the corresponding JavaScript files in `static/src/js/`.

```javascript
// For example, to customize scroll animations, edit static/src/js/scroll_animations.js
function initScrollAnimations() {
    // Your custom scroll animation logic here
}
```

## Testing Your Customizations
After customizing the theme, test it thoroughly to ensure that all changes appear correctly and function as expected across different devices and browsers.

## Conclusion
This guide covers the basic customization options for the `3DWebDevPortfolio_v17` theme. For more advanced customizations, refer to the Odoo documentation and the theme's detailed code comments.