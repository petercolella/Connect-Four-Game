$(document).ready(function() {
    console.log( "ready!" );

    $('#new-game').click(function() {
    	$('.square').css('background-color', 'white');
    	alert($('#turn').text());
    });

    var player = 1;
    var table = $('table');
    var turn = $('#player-turn');

    $('td').click(function() {
    	td = $(this);
    	var square = squareHasChecker(td);
    	if (!square) {
    		var checker = whichCheckerForCurrentPlayer(player);
    		chooseSquare(td, checker);
    		if (hasPlayerWon(table, checker)) {
    			alert("player + 'has won!'");
    			turn.text('');
    		} else {
    			player = nextPlayer(player);
    			whosTurnIsIt(turn, player);
    		}
    	} else {
    		alert('This square already has a checker!');
    	}
    });

    $('.reset').click(function() {
    	player = 1;
    	reset(table);
    	whosTurnIsIt(trun, player);
    })

    function squareHasChecker(td) {
    	if (td.hasClass('black') || td.hasClass('red')) {
    		return 1;
    	} else {
    		return 0;
    	}
    }

    function chooseSquare(td, checker) {
    	return td.addClass(checker);
    }

    function whichCheckerForCurrentPlayer(player) {
    	if (player == 1) {
    		return 'black';
    	} else {
    		return 'red';
    	}
    }

    function nextPlayer(player) {
    	if (player == 1) {
    		return player = 2;
    	} else {
    		return player = 1;
    	}
    }

    function whosTurnIsIt(turn, player) {
    	if (player == 1) {
    		turn.text("Black");
    	} else {
    		turn.text("Red");
    	}
    }

    function hasPlayerWon(table, checker) {
    	false;
    }

    function reset(table) {
    	table.find('td').each(function() {
    		$(this).removeClass('black').removeClass('red');
    	});
    }
    
});