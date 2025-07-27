$(document).ready(function(){
  $(window).scroll(function(){
  	if(this.scrollY >20){
        $('.nav-bar').addClass("sticky");
  	}else{
        $('.nav-bar').removeClass("sticky");
  	}
  })

 // toggle menu/navbar script //

  $('.menu-bar').click(function(){
     $('.nav-bar .menu').toggleClass("active");
     $('.nav-bar i').toggleClass("active");
  });

  // owl carousel script //
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:20,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
      responsive:{
          0:{
              items:1,
              nav:false
          },
          600:{
              items:2,
              nav:false
          },
          1000:{
              items:3,
              nav:false
          }
      }
  })
  

});

// scroll Event//

$(document).ready(function() {
    $('a[href^="#"]').click(function() {
        var hash = $(this).attr('href');
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1000);
          return false;
      });
  });

// aos animation//
  AOS.init({
    duration: 1000
  });
  
      AOS.init({
       offset: 200,
       duration: 600,
      easing: 'ease-in-sine',
        delay: 100,
      });
  
// For button animation//







