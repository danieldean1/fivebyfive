$(function(){

  $('.pop').hide()
  $('.popblur').hide()

  $('img').click(function(){

    var currentImage = $(this).attr('src');
    var slice = currentImage.slice(6); //slice off 'thumb/'
    console.log(slice);

    $('.pop img').attr('src', 'large_' + slice);
    $('.pop').fadeIn('slow')
    $('.popblur').fadeIn('slow')

   })

   $('.pop, .popblur').click(function(){
     $('.pop').hide()
     $('.popblur').hide()
   })



})