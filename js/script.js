/* Za otvaranje opisa treninga grupni, personalni i kardio, JQUERY padajuci meni */
$(document).ready(function(){
    $("#grupni").click(function(){
      $("#opis_grupni").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#personalni").click(function(){
      $("#opis_personalni").slideToggle("slow");
    });
  });

  $(document).ready(function(){
    $("#kardio").click(function(){
      $("#opis_kardio").slideToggle("slow");
    });
  });
  
/*slideshow u galeriji*/
var slideIndex = 0;

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slajdovi");
  var dots = document.getElementsByClassName("tackica");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Menja sliku svake 2 sekunde
}
showSlides();