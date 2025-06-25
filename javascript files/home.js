let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
 
  slides[slideIndex-1].style.display = "block";  
 
}



//to top button
document.addEventListener('DOMContentLoaded', function() {
  const ToTopButton = document.getElementById('ToTopBtn');

  if (ToTopButton) {
      window.addEventListener('scroll', function() {
          if (window.scrollY > 300) { 
              ToTopButton.style.display = 'block';
          } else {
              ToTopButton.style.display = 'none';
          }
      });

      ToTopButton.addEventListener('click', function() {
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      });
  } 
});











