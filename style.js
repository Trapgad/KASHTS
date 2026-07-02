/* ========================================================
   KASHTS WEBSITE JAVASCRIPT (FULLY FIXED & OPTIMIZED)
======================================================== */

// ================= WELCOME PAGE AUTO-REDIRECT =================
// Only runs if we are actually on the welcome page (looks for the unique welcome container)
const welcomeContainer = document.querySelector(".welcome-container");

if (welcomeContainer) {
    setTimeout(() => {
        document.body.style.opacity = "0";
        document.body.style.transition = "opacity 1s ease";
        

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);
    }, 6000);
}


// ================= NAVBAR SCROLL EFFECT =================
window.addEventListener("scroll", function () {
    // Targeted '.navbar' to properly match your CSS stylesheet configuration
    const nav = document.querySelector(".navbar");

    if (nav) {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = "#4B0082";
        } else {
            nav.style.backgroundColor = "rgba(75, 0, 130, 0.85)";
        }
    }
});

// ================= SCROLL REVEAL ANIMATION =================
const sections = document.querySelectorAll("section");

if (sections.length > 0) {
    const reveal = () => {
        sections.forEach(section => {
            const position = section.getBoundingClientRect().top;
            const screenPosition = window.innerHeight - 100;

            if (position < screenPosition) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    };

    // Initial CSS structural setups for structural fade-ins
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    });

    window.addEventListener("scroll", reveal);
    reveal(); // Run once on startup to reveal any content already above fold
}


// ================= MOBILE MENU NAVIGATION SYSTEM =================
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        // Toggle menu mechanism
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation(); 
            menuToggle.classList.toggle('active'); // Animates the hamburger into 'X'
            navMenu.classList.toggle('active');    // Slides the navigation overlay in/out
        });

        // Optimization 1: Automatically close menu if user clicks a mobile link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Optimization 2: Automatically close menu if clicking anywhere outside the menu box
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});


// ================= AUTOMATED FOOTER YEAR =================
const yearElement = document.querySelector(".year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
