/* === Shared JavaScript for Fresno's Heating & Cooling === */

document.addEventListener('DOMContentLoaded', () => {
    // Highlight active nav link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === 'index.html' && href === './')) {
            link.classList.add('active');
        }
    });

    // Mobile menu toggle (future enhancement)
    console.log('Fresno HVAC — page ready:', currentPage);
});
