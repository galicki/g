

//  CHANGE BRAND AND MENU BARS ON SCROLL
	$(window).scroll(function(){
    if ($(this).scrollTop() > 650) {
       $('.header-logo-wrap span').addClass('newColor');
        $('.one').addClass('newColorMenu');
         $('.two').addClass('newColorMenu');
    } else {
       $('.header-logo-wrap span').removeClass('newColor');
        $('.one').removeClass('newColorMenu');
        $('.two').removeClass('newColorMenu');
    }
});


// MENU STAGGER ANIMATION 

var t1 = new TimelineMax({paused: false});

t1.to(".one", 0.8, {
     y: 6,
     rotation: 45,
     ease: Expo.easeInOut
});
t1.to(".two", 0.8, {
     y: -6,
     rotation: -45,
     ease: Expo.easeInOut,
     delay: -0.8
});

t1.to(".menu", 0.5, {
     right: "0%",
     ease: Expo.easeInOut,
     delay: -0.5
});

t1.staggerFrom(".menu ul li", 0.5, {y: 200, opacity: 0, ease:Expo.easeOut}, 0.1);

t1.reverse();
$(document).on("click", ".toggle-btn", function() {
     t1.reversed(!t1.reversed());
});
$(document).on("click", "a", function() {
     t1.reversed(!t1.reversed());
});


// DUNNO TEST DEBUG?


$(document).on("click", ".send-open-modal-contact", function() {
	var t2 = new TimelineMax({paused: false});

t2.from(".sel", 1, {left:-400, opacity:0}) 
t2.from(".form-wrapper-l", 1.2, {left:-400, opacity:0},  {right:0}) 
t2.from(".form-wrapper-r", 1.3, {left:-400, opacity:0},  {right:0}) 
t2.from(".contact-desc-home-mod", 1.4, {left:-400, opacity:0},  {right:0}) 


});



// add overflow while moday (hide menu and brand)

 $('#btnhomeModal').click(function(){
        $('.start-project-home').addClass("modal-overflow");  
    });  

 $('.closes').click(function(){
        $('.start-project-home').removeClass("modal-overflow");  
    });  


// add class to menu branding and toggle when menu toggle is clicked

 $('.toggle-btn').click(function(){
        $('.default-color-set__branding').toggleClass("black-branding");  
    });  

  $('.toggle-btn').click(function(){
        $('.one').toggleClass("blackly");
        $('.two').toggleClass("blackly");
    });  