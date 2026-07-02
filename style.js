/* =========================
   KASHTS WEBSITE JAVASCRIPT
========================= */


// NAVBAR CHANGE ON SCROLL

window.addEventListener("scroll", function(){

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){

        nav.style.background = "#4B0082";

    }

    else{

        nav.style.background = "rgba(75,0,130,.85)";

    }

});





// SCROLL REVEAL ANIMATION


const sections = document.querySelectorAll("section");


const reveal = () => {


sections.forEach(section => {


const position = section.getBoundingClientRect().top;


const screen = window.innerHeight - 100;



if(position < screen){

section.style.opacity = "1";

section.style.transform = "translateY(0)";


}



});


};



sections.forEach(section => {


section.style.opacity="0";

section.style.transform="translateY(40px)";

section.style.transition="0.8s";


});



window.addEventListener("scroll", reveal);


reveal();





// MOBILE MENU


const nav = document.querySelector("nav");

const menuButton = document.createElement("div");


menuButton.innerHTML = "☰";

menuButton.style.color="white";

menuButton.style.fontSize="30px";

menuButton.style.cursor="pointer";

menuButton.style.display="none";



nav.appendChild(menuButton);



if(window.innerWidth <= 900){


menuButton.style.display="block";


}



window.addEventListener("resize",()=>{


if(window.innerWidth <= 900){

menuButton.style.display="block";

}

else{

menuButton.style.display="none";

}


});





menuButton.addEventListener("click",()=>{


const links = document.querySelector("nav ul");


if(links.style.display==="flex"){

links.style.display="none";

}

else{

links.style.display="flex";

links.style.flexDirection="column";

links.style.position="absolute";

links.style.top="80px";

links.style.right="20px";

links.style.background="#4B0082";

links.style.padding="25px";

links.style.borderRadius="15px";


}


});






// FOOTER YEAR


const year = document.querySelector(".year");


if(year){

year.textContent = new Date().getFullYear();

}
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
