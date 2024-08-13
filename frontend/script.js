
const navLinks = document.querySelectorAll("nav .link li a");
const currentUrl = window.location.pathname; 

navLinks.forEach(navLink => {
    const navPath = new URL(navLink.href).pathname; // 

    if (navPath === currentUrl) {
        navLink.classList.add("linked"); // Add 'linked' class to the active link
    } else {
        navLink.classList.remove("linked"); // Remove 'linked' class from inactive links
    }
});

// video playing
document.addEventListener("DOMContentLoaded", function() {
      const navTrigger = document.querySelector('.js-nav-trigger');
      const navMenu = document.querySelector('.nav__menu');
  
      navTrigger.addEventListener('click', function() {
          navTrigger.classList.toggle('active');
          navMenu.classList.toggle('active');
      });
  });
  


// let loading = document.getElementById("loading");
let message = document.getElementById("message");
let shows = document.querySelector(".pop");
// let showmodal2 = document.getElementById("showmodalS");
let closemodal =document.querySelectorAll("#closemodal");
let togglen =true;
function showmodal2(){
   if(togglen){
    shows.style.display ="flex";
   }else{
    shows.style.display ="none";
   }
}

closemodal.forEach((modal)=>{
    modal.addEventListener("click", async (el) => {
        el.preventDefault();
    
        // Get the button and message elements
        const button = el.target;
        let message = document.getElementById("message");
    
        // Get updated input values inside the event listener
        let fullName = document.getElementById("fullName").value.trim();
        let Email = document.getElementById("Email").value.trim();
        let description = document.getElementById("description").value.trim();
    
        // Validation checks
        if (!fullName || !Email || !description) {
            message.innerHTML = `❌ Please fill in all fields`;
            message.style.color = "red";
            return;
        } 
        
        if (!validEmail(Email)) {
            message.innerHTML = `❌ Invalid Email`;
            message.style.color = "red";
            return;
        } 
        
        if (description.length < 15) {
            message.innerHTML = `❌ Description must be at least 15 characters long`;
            message.style.color = "red";
            return;
        }
    
        // Disable button and show loading state
        button.disabled = true;
        message.innerHTML = "⏳ Sending...";
        message.style.color = "blue";
    
        // Form data object
        const formData = {
            fullName,
             Email,
             description,
             active:true
        };
    
        try {
            const response = await fetch("https://lectplus-menserver.vercel.app/api/post", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
              });
              
    
            if (response.ok) {
                message.innerHTML = `✔️ Form submitted successfully`;
                message.style.color = "green";
            } else {
                const result = await response.json();
                message.innerHTML = `❌ ${result.message || "Error submitting form"}`;
                message.style.color = "red";
            }
        } catch (error) {
            console.error(error);
            message.innerHTML = `❌ Server error, please try again later`;
            message.style.color = "red";
        } finally {
            // Re-enable button after request completes
            button.disabled = false;
        }
    });
}); 
    // Email validation function
    function validEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
    


let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= items.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = items.length - 1;
    } else {
        currentIndex = index;
    }

    items.forEach((item, i) => {
        item.classList.remove('active');
        dots[i].classList.remove('active');
        if (i === currentIndex) {
            item.classList.add('active');
            dots[i].classList.add('active');
        }
    });
}

function moveCarousel(direction) {
    showSlide(currentIndex + direction);
}

function currentSlide(index) {
    showSlide(index);
}

function autoMove() {
    moveCarousel(1);
}

// Auto move every 5 seconds
setInterval(autoMove, 5000);
showSlide(currentIndex);

let  scrollButton= document.querySelector(".scrollButton");
window.onscroll = function() {
    myFunction();
};

function myFunction() {
    if (window.scrollY > 30) {
        scrollButton.classList.add("show");
    } else {
        scrollButton.classList.remove("show");
    }
}



