/* =========================
   KASHTS WEBSITE JAVASCRIPT (FULLY FIXED)
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


// ================= MOBILE MENU (FIXED SYSTEM) =================
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', (e) => {
            // Prevents any unexpected event bubbling issues
            e.stopPropagation(); 
            
            menuToggle.classList.toggle('active'); // Animates the hamburger to an 'X'
            navMenu.classList.toggle('active');    // Slides the purple menu out/in
        });
    }
});


// ================= FOOTER YEAR =================
const year = document.querySelector(".year");

if (year) {
    year.textContent = new Date().getFullYear();
}
// AUTO REDIRECT AFTER 6 SECONDS
setTimeout(() => {
  document.body.style.opacity = "0";
  document.body.style.transition = "1s";

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1000);

}, 6000);
