/* ========== SCROLL ==========*/
$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        window.location.hash = hash;
      });
    } 
  });
});

/* ========== NAV ==========*/

function animateElements() {
  var elementsToAnimate = ['.nav-links li', '.home-container', '.about-container', '.skills-container', '.project-container', '.contact-container', 'footer'];

  elementsToAnimate.forEach(function (element) {
      anime({
          targets: element,
          opacity: [0, 1],
          translateY: [20, 0],
          easing: 'easeInOutQuad',
          duration: 1000,
          delay: anime.stagger(200),
      });
  });
}

document.addEventListener('DOMContentLoaded', function () {
  animateElements();
});

  