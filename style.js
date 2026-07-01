// Smooth scrolling
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Welcome message
window.onload = function(){
    console.log("Welcome to KASHTIS School Website");
};
function registerStudent() {
    alert("Registration successful!");
}