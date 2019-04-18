

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

t1.staggerFrom(".menu ul li", 0.5, {y: 200, opacity: 0, ease:Expo.easeOut}, 0.2);

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
$(document).on("click", ".closes", function() {


// MODAL START YOUR PROJECT 

  // Get the modal
var modale = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("btnhomeModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closes")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modale.classList.add("opens")
$('body').addClass('layer-black')
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modale.classList.remove("opens")
$('body').removeClass('layer-black')

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modale) {
        modale.classList.remove("opens")
$('body').removeClass('layer-black')
    }
}

  // Get the modal
var modale = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("btnhomeModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closes")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modale.classList.add("opens")
$('body').addClass('layer-black')
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modale.classList.remove("opens")
$('body').removeClass('layer-black')

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modale) {
        modale.classList.remove("opens")
$('body').removeClass('layer-black')
    }
}

/* ===== Logic for creating fake Select Boxes ===== */
$('.sel').each(function() {
  $(this).children('select').css('display', 'none');
  
  var $current = $(this);
  
  $(this).find('option').each(function(i) {
    if (i == 0) {
      $current.prepend($('<div>', {
        class: $current.attr('class').replace(/sel/g, 'sel__box')
      }));
      
      var placeholder = $(this).text();
      $current.prepend($('<span>', {
        class: $current.attr('class').replace(/sel/g, 'sel__placeholder'),
        text: placeholder,
        'data-placeholder': placeholder
      }));
      
      return;
    }
    
    $current.children('div').append($('<span>', {
      class: $current.attr('class').replace(/sel/g, 'sel__box__options'),
      text: $(this).text()
    }));
  });
});


// Toggling the `.active` state on the `.sel`.
$('.sel').click(function() {
  $(this).toggleClass('active');
});

// Toggling the `.selected` state on the options.
$('.sel__box__options').click(function() {
  var txt = $(this).text();
  var index = $(this).index();
  
  $(this).siblings('.sel__box__options').removeClass('selected');
  $(this).addClass('selected');
  
  var $currentSel = $(this).closest('.sel');
  $currentSel.children('.sel__placeholder').text(txt);
  $currentSel.children('select').prop('selectedIndex', index + 1);
});


// add overflow while moday (hide menu and brand)

 $('#btnhomeModal').click(function(){
        $('.start-project-home').addClass("modal-overflow");  
    });  

 $('.closes').click(function(){
        $('.start-project-home').removeClass("modal-overflow");  
    });  



});
