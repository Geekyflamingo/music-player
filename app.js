"use strict";

$(document).ready( function() {
  $.getJSON('data.json', function (data) {
    var $trackTemplate = $('#trackList').html();
    var replacedHTML = Mustache.to_html($trackTemplate, data);
    $('#musicPlayer').html(replacedHTML);
  });

  var music = {
    stopAll: function(track) {
      $('audio').each( function (index, element) {
        element.pause();
        var src = element.src;
        element.src = '';
        element.src = src;
      })
      $('i').not($(track)).removeClass("fa-stop").addClass("fa-play");
    },
    play: function(track) {
      var trackId = $(track).data("id");
      $('audio')[trackId-1].play();
      $(track).removeClass("fa-play").addClass("fa-stop");
    },
    stop: function(track) {
      var trackId = $(track).data("id");
      $('audio')[trackId-1].pause();
      $(track).removeClass("fa-stop").addClass("fa-play");
    }
  };

  $('#musicPlayer').on('click', '.fa-play', function() {
    music.stopAll();
    music.play(this);
    var playing= $(this).data('title');
    $('h2.select').html("Now playing: " + "<em>" + playing + "</em>" );
  });

  $('#musicPlayer').on('click', '.fa-stop', function() {
    music.stop(this);
    $('h2.select').text( "Select a song!" );
  });

});
