/*MOBILE NAVIGATION*/ 

function nav() {
  var $toggle = $('.js-toggle');
  var $nav = $('.js-nav');
  var open = 'toggle-open';

  $toggle.on('click', function() {
      if($toggle.hasClass(open)) {
          $toggle.removeClass(open);
          $nav.stop().slideUp();
      } else {
          $toggle.addClass(open);
          $nav.stop().slideDown();
      }
  });
}


// /*Pojavljivanje navigacije kada je mobilna navigacija zatvorena(prilikom resize)*/ 
 // $(window).resize(function() {
 //   if ( $(this).width() > 767) {
 //    $('.navigation').css('display', 'block');
 //  }
 //   else {
 //    $('.navigation').css('display', 'none');
 //  }
 // });

// $(window).resize(function(){
//   if ( $(this).width() < 767 && $toggle.slideDown()) {
//     $($toggle).slideUp();
//   }
//    else {
//      $($toggle).addClass(open); 
//    }
// });


/*JUMPING NAVIGATION*/

// function skrol() {
//   var scrollLink = $('.scroll');
//   var headerHeight = $('header').outerHeight();
    
//   scrollLink.click(function(e) {
//     e.preventDefault();
//     $('body,html').animate({
//       scrollTop: $(this.hash).offset().top - headerHeight
//     }, 1500 );
//   });
// }



/*SLIDER*/

// function slider() {
//   $('.js-slider').slick({
//       infinite: true,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       dots: true,
//       speed:1500
//   });
// }


/*RELOAD ON TOP*/ 
$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

/*SCROOL TO TOP*/

// function scrollTop() {

//   $(window).scroll(function(){                              //Check to see if the window is top if not then display button
 
//    var showAfter = 100;
//    if ( $(this).scrollTop() > showAfter ) {                             // Show button after 100px
//     $('.back-to-top').fadeIn();
//    } else { 
//     $('.back-to-top').fadeOut();
//    }
//   });
  
//   $('.back-to-top').click(function(){                                     //Click event to scroll to top
//    $('html, body').animate({scrollTop : 0},800);
//    return false;
//   });
// };

// scrollTop(); 
// skrol();
// slider();
nav();

