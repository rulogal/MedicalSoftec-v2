const navLines = document.querySelector(".nav__lines");
const navLinesX = document.querySelector(".nav__linesX"); 
const navMobileList = document.querySelector(".nav__mobile");  

openMenu (){  
    navLines.style.display = "none";
    navLinesX.style.display = "flex";     
    navMobileList.style.display = "flex";
 }
 
 closeMenu (){ 
    navLines.style.display = "flex";
    navLinesX.style.display = "none";     
    navMobileList.style.display = "none";
 }