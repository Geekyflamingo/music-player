"use strict";

$('.container').on('click', '.fa-play', function() {
  $('.fa-stop').addClass('fa-play').removeClass('fa-stop');
  $(this).removeClass('fa-play').addClass('fa-stop');
});


$('.container').on('click', '.fa-stop', function() {
  $(this).removeClass('fa-stop').addClass('fa-play');
});
