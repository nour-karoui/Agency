$(function(){
  setInterval(function(){
    var seconds = (parseInt($('#seconds').text()) + 59 ) % 60;
    $('#seconds').text(seconds);
    if(seconds === 0) {
      var minutes = (parseInt($('#minutes').text()) + 59 ) % 60;
      $('#minutes').text(minutes);
      if(minutes === 0){
        var hours = (parseInt($('#hours').text()) + 23 ) % 24;
        $('#hours').text(hours);
        if(hours === 0) {
          var days = parseInt($('#days').text()) - 1;
          $('#days').text(days);
        }
      }
    }
  }, 1000);
})
