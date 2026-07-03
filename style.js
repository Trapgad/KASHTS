// ==================================================
// KASHTS WEBSITE JAVASCRIPT (FULLY FIXED & OPTIMIZED)
// ==================================================

// ================= NAVBAR SCROLL EFFECT =================
window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");

    if (nav) {
        if (window.scrollY > 50) {
            nav.style.background = "#4B0082";
        } else {
            nav.style.background = "rgba(75,0,130,.85)";
        }
    }
});


// ================= SCROLL REVEAL =================
const sections = document.querySelectorAll("section");

const reveal = () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screen = window.innerHeight - 100;

        if (position < screen) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};

// Initial setup for scroll reveal
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "0.8s";
});

window.addEventListener("scroll", reveal);
reveal();


// ================= MOBILE MENU (FIXED SYSTEM) =================
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', (e) => {
            // Prevents event bubbling to ensure smooth toggle
            e.stopPropagation(); 
            
            menuToggle.classList.toggle('active'); // Animates hamburger to 'X'
            navMenu.classList.toggle('active');    // Slides the menu out/in
        });
    }
});


// ================= FOOTER YEAR (AUTOMATIC) =================
// This selects the span with class "year" in your footer
const yearElement = document.querySelector(".year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
