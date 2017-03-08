$(document).ready(function() {
    console.log( "ready!" );

    $('#new-game').click(function() {
    	$('.square').css('background-color', 'white');
    	alert($('#turn').text());
    });
    
});