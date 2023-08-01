
document.addEventListener("DOMContentLoaded", function () {
  const carouselTrack = document.querySelector(".cards");
  const carouselSlides = document.querySelectorAll(".cards2");
  
  const slideWidth = document.querySelector(".firstCard").offsetWidth;
  const prevButton = document.querySelector(".arrow-left");
  const nextButton = document.querySelector(".arrow-right");
  let position = 0;

  nextButton.addEventListener("click", () => {
    position -= slideWidth;
    if (position < -carouselTrack.scrollWidth + slideWidth) {
      position = 0;
    }
    for(carousel of carouselSlides){
    carousel.style.transform = `translateX(${position}px)`;}
  });

  prevButton.addEventListener("click", () => {
    position += slideWidth;
    if (position > 0) {
      position = -carouselTrack.scrollWidth + slideWidth;
    }
    for(carousel of carouselSlides){
    carousel.style.transform = `translateX(${position}px)`;}
  });
});

// typing animation
document.addEventListener("DOMContentLoaded", function () {
  const text = "WEB DESIGNER + FRONT-END DEVELOPER"; // Your text here
  let index = 0;
  const typingText = document.getElementById("typingText");

  function type() {
   
    index++;
    if (index <= text.length) {
     setTimeout(type, 100);
    }
     typingText.textContent = text.slice(0, index);
     // Adjust the typing speed (milliseconds per character)
  }

  type();
});
 
// WHICH SECTION
 function getCurrentSection() {
      const sections = document.querySelectorAll("section");
      let currentSection = null;
      const slideButtons=document.querySelectorAll(".slideButtons .slidebtn a");
    
      // Loop through each section and check if it is currently in view
      for (const section of sections) {
        
        const rect = section.getBoundingClientRect();
      for(const slidebtn of slideButtons){
       
        if(slidebtn.getAttribute("href")==="#"+section.id){
         slidebtn.style.transform="scale(2)";
        }else{
                   slidebtn.style.transform="scale(1)";

        }

      }
        if (rect.top <= 0 && rect.bottom > 0) {
          currentSection = section;
          break;
        }
      }

      // If no section is in view, consider the header as the current section
      

      return currentSection;
    }

 



  
// MEDIA QUERIES
 // Function to check the media query condition
        function applyMediaQueryStyles() {
          
            // Use window.matchMedia to check the media query condition
            const isSmallScreen = window.matchMedia("(max-width: 400px)").matches;

            // Apply styles based on the condition
            if (isSmallScreen) {
               let button=document.querySelector(".toggleBtn");
   let clicked=true;

 button.addEventListener("click",()=>{ 
    let navItem=document.querySelector(".navItems");

   if(clicked){
 clicked=false;
   navItem.classList.add("open");
   }else{
      navItem.classList.remove("open");
     
      clicked=true;

   }
 })
  
            } 
        }

        // Call the function initially to apply styles on page load
    applyMediaQueryStyles();

        // Add event listener to reapply styles when the screen size changes
        window.addEventListener("resize", applyMediaQueryStyles);






