
window.addEventListener("scroll", function() {
   var scrollBtn = document.getElementById("scrollBtn");
   var scrollPosition = window.pageYOffset;

   if (scrollPosition > 80) {
     scrollBtn.style.display = "block";
   } else {
     scrollBtn.style.display = "none";
   }
});

function scrollToTop(){
   window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
}