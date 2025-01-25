
// Smooth scroll for "Skip to Comics" and "Skip to Films" links
document.querySelectorAll('.skip-link').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Theme toggle for dark mode
const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    toggleButton.textContent = isDarkMode ? 'Light Mode 🪐' : 'Dark Mode 🌃';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light'); // Save preference
});

// Apply saved theme on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = 'Light Mode 🪐';
    }
});

//Lazy Loading Images
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    lazyImages.forEach((img) => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    });
});

