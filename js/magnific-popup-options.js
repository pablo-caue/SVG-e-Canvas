const card1 = document.querySelector("#cardMario")
card1.addEventListener("click",(e)=>{
  card1.classList.toggle("flip")
})

const card2 = document.querySelector("#cardPacman")
card2.addEventListener("click",(e)=>{
  card2.classList.toggle("flip")
})

const card3 = document.querySelector("#cardHerobrine")
card3.addEventListener("click",(e)=>{
  card3.classList.toggle("flip")
})


const card4 = document.querySelector("#cardCircle")
card4.addEventListener("click",(e)=>{
  card4.classList.toggle("flip")
})

$(document).ready(function() {
  // MagnificPopup
  var magnifPopup = function() {
    $('.image-popup').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery:{
        enabled:true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };
  
  // Call the functions 
  magnifPopup();

});