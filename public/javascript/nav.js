const navLinks = document.querySelector(".nav__links");
const navX = document.querySelector(".nav__list__elementx"); 
const navToggle = document.querySelector(".nav__toggle");

navToggle.addEventListener("click", function(){
   navToggle.style.display = "none";
   navX.style.display = "flex";     
   navLinks.style.display = "flex";
});

navX.addEventListener("click", function(){
   navToggle.style.display = "flex";
   navX.style.display = "none";     
   navLinks.style.display = "none";
});

