/* =========================
   KASHTS WEBSITE JAVASCRIPT (CLEAN FIXED)
========================= */

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

// initial setup
sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "0.8s";
});

window.addEventListener("scroll", reveal);
reveal();


// ================= MOBILE MENU (ONLY ONE SYSTEM) =================
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector(".nav-menu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}


// ================= FOOTER YEAR =================
const year = document.querySelector(".year");

if (year) {
    year.textContent = new Date().getFullYear();
}
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', (e) => {
        // Prevents any unexpected event bubbling issues
        e.stopPropagation(); 
        
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });
});
