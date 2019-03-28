

$('.block2__left').on('click', function(){
  $( ".pop1" ).css( "visibility", "visible" );
});

$('.pop1').on('click', function(){
  $( ".pop1" ).css( "visibility", "hidden" );
});

$('.komment1').on('click', function(){
  $( ".komment1" ).css( "z-index", "1" );
  $( ".komment2" ).css( "z-index", "2" );
});

$('.komment2').on('click', function(){
  $( ".komment1" ).css( "z-index", "2" );
  $( ".komment2" ).css( "z-index", "1" );
});
