const elemen1 = document.querySelector(".proyectos__view__info__element1");
 const elemen2 = document.querySelector(".proyectos__view__info__element2");
 const elemen3 = document.querySelector(".proyectos__view__info__element3");

 const img1 = document.querySelector(".proyectos__view__img__1");
 const img2 = document.querySelector(".proyectos__view__img__2");
 const img3 = document.querySelector(".proyectos__view__img__3");
 
 elemen1.addEventListener("click", function () {
      img1.style.display = "block";
      img2.style.display = "none";
      img3.style.display = "none";
 });

 elemen2.addEventListener("click", function () {
    img2.style.display = "block";
    img1.style.display = "none";
    img3.style.display = "none";
});

elemen3.addEventListener("click", function () {
    img3.style.display = "block";
    img2.style.display = "none";
    img1.style.display = "none";
});