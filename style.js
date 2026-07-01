document.addEventListener("DOMContentLoaded", function(){


    // Smooth scrolling only for same-page links

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function(e){

            e.preventDefault();

            const target = document.querySelector(
                this.getAttribute("href")
            );


            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });



    // Website welcome message

    console.log(
        "Welcome to Kwabeng Anglican Senior High / Technical School (KASHTS)"
    );



    // Remove loader after page loads

    const loader = document.querySelector(".loader");


    if(loader){

        setTimeout(()=>{

            loader.style.display="none";

        },3000);

    }



    // Active navigation link

    const currentPage =
    window.location.pathname.split("/").pop();



    document.querySelectorAll("nav a").forEach(link=>{


        if(link.getAttribute("href") === currentPage){

            link.style.color="#ffd700";

        }


    });



});




// Registration Function

function registerStudent(){


    alert(
    "Registration successful! Welcome to KASHTS."
    );


}



// Login Function

function loginUser(){


    alert(
    "Login successful!"
    );


}