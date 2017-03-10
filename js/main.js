$(document).ready(function() {
    
    // Initial variable values.
    var player = 1;
    var table = $('table');
    var turn = $('#turn');
    var gameRunning = true;
    var moves = 1;
    var playerOneWins = 0;
    var playerTwoWins = 0;

    // Functionality of clicking a column.
    $('td').click(function() {
    	// Game must be running to make a move.
    	if (gameRunning) {
    		td = $(this);
    		var square = squareHasChecker(td);
	    	// Determines the square that results from clicking a column.
	    	if (!square) {
	    		var checker = whichCheckerForCurrentPlayer(player);
	    		var rowIndex = $(this).index();
				var sixthRow = $("tr:nth-child(6) > td").eq(rowIndex);
				var fifthRow = $("tr:nth-child(5) > td").eq(rowIndex);
				var fourthRow = $("tr:nth-child(4) > td").eq(rowIndex);
				var thirdRow = $("tr:nth-child(3) > td").eq(rowIndex);
				var secondRow = $("tr:nth-child(2) > td").eq(rowIndex);
	    		if (sixthRow.html() == '') {
	    			chooseSquare(sixthRow, checker);
	    		} else if (fifthRow.html() == '') {
	    			chooseSquare(fifthRow, checker);
	    		} else if (fourthRow.html() == '') {
	    			chooseSquare(fourthRow, checker);
	    		} else if (thirdRow.html() == '') {
	    			chooseSquare(thirdRow, checker);
	    		} else if (secondRow.html() == '') {
	    			chooseSquare(secondRow, checker);
	    		} else {
	    			chooseSquare(td, checker);
	    		}
	    			// Ends the game if the board is full.
	    			if (moves > 41) {
	    				alert('The board is full. There are no more moves!')
	    				turn.html("Nobody won!");
	    			} else if (hasPlayerWon(table, checker)) {
	    			winner();
	    			} else {
	    			player = nextPlayer(player);
	    			whosTurnIsIt(turn, player);
	    			moves++;
	    		};
	    	// Result of clicking on an occupied square.
	    	} else {
	    		alert('This square already has a checker!');
	    	};
	    // Result of clicking on the board after a winner and before a new game.
    	} else {
    		document.getElementById('bill').play();
    		alert('Game over man, game over!');
    	};
    });

    // Functionality of New Game button.
    $('.btn').click(function() {
    	player = 1;
    	gameRunning = true;
    	moves = 1;
    	reset(table);
    	whosTurnIsIt(turn, player);
    })

    // Checks if a square is occupied.
    function squareHasChecker(td) {
    	if (td.hasClass('black') || td.hasClass('red')) {
    		return 1;
    	} else {
    		return 0;
    	}
    }

    // Appends an image class to chosen square.
    function chooseSquare(td, checker) {
    	if (player == 1) {
			return td.addClass(checker).append("<img class='piece' src='images/black_checker.jpg'/>");    		
    	} else {
    		return td.addClass(checker).append("<img class='piece' src='images/red_checker.jpg'/>");
    	}
    }

    // Determines the checker class for the current player.
    function whichCheckerForCurrentPlayer(player) {
    	if (player == 1) {
    		return 'black';
    	} else {
    		return 'red';
    	}
    }

    // Alternates player turns.
    function nextPlayer(player) {
    	if (player == 1) {
    		return player = 2;
    	} else {
    		return player = 1;
    	}
    }

    // Indicates whose turn it is and styles the DOM element.
    function whosTurnIsIt(turn, player) {
    	turn.html("It's your turn Player " + player + "!");
    	if (player == 1) {
    		$('#turn').css("background", "black").css("color", "white");
    	} else {
    		$('#turn').css("background", "red").css("color", "white");
    	}
    }

    // Checks all possible winning combinations in the longest, least imaginative way.
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
    	else if (table.find('#a1').hasClass(checker) && table.find('#b2').hasClass(checker) && table.find('#c3').hasClass(checker) && table.find('#d4').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#a2').hasClass(checker) && table.find('#b3').hasClass(checker) && table.find('#c4').hasClass(checker) && table.find('#d5').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#a3').hasClass(checker) && table.find('#b4').hasClass(checker) && table.find('#c5').hasClass(checker) && table.find('#d6').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#a4').hasClass(checker) && table.find('#b5').hasClass(checker) && table.find('#c6').hasClass(checker) && table.find('#d7').hasClass(checker)) {
    	won = 1;
    	}
    	else if (table.find('#b1').hasClass(checker) && table.find('#c2').hasClass(checker) && table.find('#d3').hasClass(checker) && table.find('#e4').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#b2').hasClass(checker) && table.find('#c3').hasClass(checker) && table.find('#d4').hasClass(checker) && table.find('#e5').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#b3').hasClass(checker) && table.find('#c4').hasClass(checker) && table.find('#d5').hasClass(checker) && table.find('#e6').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#b4').hasClass(checker) && table.find('#c5').hasClass(checker) && table.find('#d6').hasClass(checker) && table.find('#e7').hasClass(checker)) {
    	won = 1;
    	}
    	else if (table.find('#c1').hasClass(checker) && table.find('#d2').hasClass(checker) && table.find('#e3').hasClass(checker) && table.find('#f4').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#c2').hasClass(checker) && table.find('#d3').hasClass(checker) && table.find('#e4').hasClass(checker) && table.find('#f5').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#c3').hasClass(checker) && table.find('#d4').hasClass(checker) && table.find('#e5').hasClass(checker) && table.find('#f6').hasClass(checker)) {
    	won = 1;
    	} else if (table.find('#c4').hasClass(checker) && table.find('#d5').hasClass(checker) && table.find('#e6').hasClass(checker) && table.find('#f7').hasClass(checker)) {
    	won = 1;
    	}
    	return won;
	}

	// Resets the board by clearing the classes.
    function reset(table) {
    	table.find('td').each(function() {
    		$(this).removeClass('black').removeClass('red').empty();
    	})
    }

    // Alerts who won and updates nimber of games won.
    function winner() {
    	whichCheckerForCurrentPlayer(player);
    	document.getElementById('yay').play();
    	alert('Player ' + player + ' is the winner!');
    	if (player == 1) {
		    playerOneWins++;
		    $("#black").text(playerOneWins);
		} else {
		    playerTwoWins++;
		    $("#red").text(playerTwoWins);
		}
    	return gameRunning = false;
    }
    
});