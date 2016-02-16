$('#character-counter').text($('#the-textarea').attr('maxlength') + ' characters left');
$('#the-textarea').keyup(function () {
  var max = $(this).attr('maxlength');
  var len = $(this).val().length;
  var char = max - len;
  if(len<=(max*.2)){
    $('#character-counter').text(char + ' characters left');
    $('#character-counter').css({color:'green'});
  }
  if(len>(max*.2) && len<(max*.8)){
    $('#character-counter').text(char + ' characters left');
    $('#character-counter').css({color:'black'});
  }
  if(len>=(max*.8) && len<=(max*.9)){
    $('#character-counter').text(char + ' characters left');
    $('#character-counter').css({color:'gold'});
  }
  if(len>(max*.9)){
    $('#character-counter').text(char + ' characters left');
    $('#character-counter').css({color:'red'});
  }
  else {
    $('#character-counter').text(char + ' characters left');
  }
});