$('a[data-toggle="tab"]').on('click', function(){
  if ($(this).parent('li').hasClass('disabled')) {
    return false;
  }
});