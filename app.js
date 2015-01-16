$.getJSON('data.json', function(tracks){
  var $tracksTemplate = $('.tracksTemplate').html();
  var newHTML = Mustache.to_html($tracksTemplate, tracks);

  $('.tracks').html(newHTML);
});

  $('.container').on('click', '.fa-play', function(){
    $('i').removeClass('fa-stop');
    $('i').addClass('fa-play');
    $(this).removeClass('fa-play');
    $(this).addClass('fa-stop');
    $('h1').text("Now playing: "  );
    document.getElementById("thrill-of-the-hunt").play();

  });
  $('.container').on('click', '.fa-stop', function(){
    $(this).removeClass('fa-stop');
    $(this).addClass('fa-play');
    $('h1').text( "Select a Song!" );
  });
