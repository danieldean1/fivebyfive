$(function(){

  $('.pop').hide()

  $('img').click(function(){

    var currentImage = $(this).attr('src');

    $('.pop img').attr('src', currentImage);
    $('.pop').show()

   })

   $('.pop').click(function(){
     $('.pop').hide()
   })

})