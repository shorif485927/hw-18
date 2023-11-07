//



$(function(){

//jquary code






let menuBtn = $('.hamburger');

let sideBar = $('.sidebar');

let nav = $('nav');




menuBtn.click(function(){

     sideBar.toggleClass('active')
  menuBtn.toggleClass('is-active')
})



$(window).on('load', function() {
    $('.preloader').fadeOut(500)
  })



//* jquary code ends

})