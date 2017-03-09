$(document).ready(function() {
    
    var player = 1;
    var table = $('table');
    var turn = $('#turn');
    var gameRunnung = true;
    var moves = 1;

    $('td').click(function() {
    	if (gameRunnung) {
    		td = $(this);
    		var square = squareHasChecker(td);
	    	if (!square) {
	    		var checker = whichCheckerForCurrentPlayer(player);
	    		chooseSquare(td, checker);
	    		if (moves > 41) {
	    			alert('The board is full. There are no more moves!')
	    		} else if (hasPlayerWon(table, checker)) {
	    			winner();
	    		} else {
	    			player = nextPlayer(player);
	    			whosTurnIsIt(turn, player);
	    			moves = moves + 1;
	    		}
	    	} else {
	    		alert('This square already has a checker!');
	    	}
    	} else {
    		alert('Game over man, game over!');
    	}
    });

    $('.btn').click(function() {
    	player = 1;
    	gameRunnung = true;
    	moves = 1;
    	reset(table);
    	whosTurnIsIt(turn, player);
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
    	turn.html("It's your turn Player " + player + "!");
    	if (player == 1) {
    		$('#turn').css("background", "black").css("color", "white");
    	} else {
    		$('#turn').css("background", "red").css("color", "white");
    	}
    }

    function hasPlayerWon(table, checker) {
    	var won = 0;
    	if (table.find('#a1').hasClass(checker) && table.find('#a2').hasClass(checker) && table.find('#a3').hasClass(checker) && table.find('#a4').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#a2').hasClass(checker) && table.find('#a3').hasClass(checker) && table.find('#a4').hasClass(checker) && table.find('#a5').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#a3').hasClass(checker) && table.find('#a4').hasClass(checker) && table.find('#a5').hasClass(checker) && table.find('#a6').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#a4').hasClass(checker) && table.find('#a5').hasClass(checker) && table.find('#a6').hasClass(checker) && table.find('#a7').hasClass(checker)) {
    	won = 1;
    	}
    	else if (table.find('#b1').hasClass(checker) && table.find('#b2').hasClass(checker) && table.find('#b3').hasClass(checker) && table.find('#b4').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#b2').hasClass(checker) && table.find('#b3').hasClass(checker) && table.find('#b4').hasClass(checker) && table.find('#b5').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#b3').hasClass(checker) && table.find('#b4').hasClass(checker) && table.find('#b5').hasClass(checker) && table.find('#b6').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#b4').hasClass(checker) && table.find('#b5').hasClass(checker) && table.find('#b6').hasClass(checker) && table.find('#b7').hasClass(checker)) {
    	won = 1;
    	}
    	else if (table.find('#c1').hasClass(checker) && table.find('#c2').hasClass(checker) && table.find('#c3').hasClass(checker) && table.find('#c4').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#c2').hasClass(checker) && table.find('#c3').hasClass(checker) && table.find('#c4').hasClass(checker) && table.find('#c5').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#c3').hasClass(checker) && table.find('#c4').hasClass(checker) && table.find('#c5').hasClass(checker) && table.find('#c6').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#c4').hasClass(checker) && table.find('#c5').hasClass(checker) && table.find('#c6').hasClass(checker) && table.find('#c7').hasClass(checker)) {
    	won = 1;
    	}
    	else if (table.find('#d1').hasClass(checker) && table.find('#d2').hasClass(checker) && table.find('#d3').hasClass(checker) && table.find('#d4').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#d2').hasClass(checker) && table.find('#d3').hasClass(checker) && table.find('#d4').hasClass(checker) && table.find('#d5').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#d3').hasClass(checker) && table.find('#d4').hasClass(checker) && table.find('#d5').hasClass(checker) && table.find('#d6').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#d4').hasClass(checker) && table.find('#d5').hasClass(checker) && table.find('#d6').hasClass(checker) && table.find('#d7').hasClass(checker)) {
    	won = 1;
    	}
    	else if (table.find('#e1').hasClass(checker) && table.find('#e2').hasClass(checker) && table.find('#e3').hasClass(checker) && table.find('#e4').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#e2').hasClass(checker) && table.find('#e3').hasClass(checker) && table.find('#e4').hasClass(checker) && table.find('#e5').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#e3').hasClass(checker) && table.find('#e4').hasClass(checker) && table.find('#e5').hasClass(checker) && table.find('#e6').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#e4').hasClass(checker) && table.find('#e5').hasClass(checker) && table.find('#e6').hasClass(checker) && table.find('#e7').hasClass(checker)) {
    	won = 1;
    	}
    	else if (table.find('#f1').hasClass(checker) && table.find('#f2').hasClass(checker) && table.find('#f3').hasClass(checker) && table.find('#f4').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#f2').hasClass(checker) && table.find('#f3').hasClass(checker) && table.find('#f4').hasClass(checker) && table.find('#f5').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#f3').hasClass(checker) && table.find('#f4').hasClass(checker) && table.find('#f5').hasClass(checker) && table.find('#f6').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#f4').hasClass(checker) && table.find('#f5').hasClass(checker) && table.find('#f6').hasClass(checker) && table.find('#f7').hasClass(checker)) {
    	won = 1;
    	}
    	else if (table.find('#a1').hasClass(checker) && table.find('#b1').hasClass(checker) && table.find('#c1').hasClass(checker) && table.find('#d1').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#b1').hasClass(checker) && table.find('#c1').hasClass(checker) && table.find('#d1').hasClass(checker) && table.find('#e1').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#c1').hasClass(checker) && table.find('#d1').hasClass(checker) && table.find('#e1').hasClass(checker) && table.find('#f1').hasClass(checker)) {
    	won = 1;
    	}
    	else if (table.find('#a2').hasClass(checker) && table.find('#b2').hasClass(checker) && table.find('#c2').hasClass(checker) && table.find('#d2').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#b2').hasClass(checker) && table.find('#c2').hasClass(checker) && table.find('#d2').hasClass(checker) && table.find('#e2').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#c2').hasClass(checker) && table.find('#d2').hasClass(checker) && table.find('#e2').hasClass(checker) && table.find('#f2').hasClass(checker)) {
    	won = 1;
    	}
    	else if (table.find('#a3').hasClass(checker) && table.find('#b3').hasClass(checker) && table.find('#c3').hasClass(checker) && table.find('#d3').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#b3').hasClass(checker) && table.find('#c3').hasClass(checker) && table.find('#d3').hasClass(checker) && table.find('#e3').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#c3').hasClass(checker) && table.find('#d3').hasClass(checker) && table.find('#e3').hasClass(checker) && table.find('#f3').hasClass(checker)) {
    	won = 1;
    	}
    	else if (table.find('#a4').hasClass(checker) && table.find('#b4').hasClass(checker) && table.find('#c4').hasClass(checker) && table.find('#d4').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#b4').hasClass(checker) && table.find('#c4').hasClass(checker) && table.find('#d4').hasClass(checker) && table.find('#e4').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#c4').hasClass(checker) && table.find('#d4').hasClass(checker) && table.find('#e4').hasClass(checker) && table.find('#f4').hasClass(checker)) {
    	won = 1;
    	}
    	else if (table.find('#a5').hasClass(checker) && table.find('#b5').hasClass(checker) && table.find('#c5').hasClass(checker) && table.find('#d5').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#b5').hasClass(checker) && table.find('#c5').hasClass(checker) && table.find('#d5').hasClass(checker) && table.find('#e5').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#c5').hasClass(checker) && table.find('#d5').hasClass(checker) && table.find('#e5').hasClass(checker) && table.find('#f5').hasClass(checker)) {
    	won = 1;
    	}
    	else if (table.find('#a6').hasClass(checker) && table.find('#b6').hasClass(checker) && table.find('#c6').hasClass(checker) && table.find('#d6').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#b6').hasClass(checker) && table.find('#c6').hasClass(checker) && table.find('#d6').hasClass(checker) && table.find('#e6').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#c6').hasClass(checker) && table.find('#d6').hasClass(checker) && table.find('#e6').hasClass(checker) && table.find('#f6').hasClass(checker)) {
    	won = 1;
    	}
    	else if (table.find('#a7').hasClass(checker) && table.find('#b7').hasClass(checker) && table.find('#c7').hasClass(checker) && table.find('#d7').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#b7').hasClass(checker) && table.find('#c7').hasClass(checker) && table.find('#d7').hasClass(checker) && table.find('#e7').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#c7').hasClass(checker) && table.find('#d7').hasClass(checker) && table.find('#e7').hasClass(checker) && table.find('#f7').hasClass(checker)) {
    	won = 1;
    	}
    	else if (table.find('#a4').hasClass(checker) && table.find('#b3').hasClass(checker) && table.find('#c2').hasClass(checker) && table.find('#d1').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#a5').hasClass(checker) && table.find('#b4').hasClass(checker) && table.find('#c3').hasClass(checker) && table.find('#d2').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#a6').hasClass(checker) && table.find('#b5').hasClass(checker) && table.find('#c4').hasClass(checker) && table.find('#d3').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#a7').hasClass(checker) && table.find('#b6').hasClass(checker) && table.find('#c5').hasClass(checker) && table.find('#d4').hasClass(checker)) {
    	won = 1;
    	}
    	else if (table.find('#b4').hasClass(checker) && table.find('#c3').hasClass(checker) && table.find('#d2').hasClass(checker) && table.find('#e1').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#b5').hasClass(checker) && table.find('#c4').hasClass(checker) && table.find('#d3').hasClass(checker) && table.find('#e2').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#b6').hasClass(checker) && table.find('#c5').hasClass(checker) && table.find('#d4').hasClass(checker) && table.find('#e3').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#b7').hasClass(checker) && table.find('#c6').hasClass(checker) && table.find('#d5').hasClass(checker) && table.find('#e4').hasClass(checker)) {
    	won = 1;
    	}
    	else if (table.find('#c4').hasClass(checker) && table.find('#d3').hasClass(checker) && table.find('#e2').hasClass(checker) && table.find('#f1').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#c5').hasClass(checker) && table.find('#d4').hasClass(checker) && table.find('#e3').hasClass(checker) && table.find('#f2').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#c6').hasClass(checker) && table.find('#d5').hasClass(checker) && table.find('#e4').hasClass(checker) && table.find('#f3').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#c7').hasClass(checker) && table.find('#d6').hasClass(checker) && table.find('#e5').hasClass(checker) && table.find('#f4').hasClass(checker)) {
    	won = 1;
    	}
    	return won;
	}

    function reset(table) {
    	table.find('td').each(function() {
    		$(this).removeClass('black').removeClass('red');
    	})
    }

    function winner() {
    	whichCheckerForCurrentPlayer(player);
    	setTimeout(alert('Player ' + player + ' is the winner!'), 10);
    	return gameRunnung = false;
    }
    
});