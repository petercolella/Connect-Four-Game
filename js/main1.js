$(document).ready(function() {
    
	// Initial variable values.
	var won = 0;
    var player = 1;
	var table = $('table');
	var cells = $('td');
    var turn = $('#turn');
    var gameRunning = true;
    var moves = 0;
    var playerOneWins = 0;
    var playerTwoWins = 0;
    var whoGoesFirst = 1;

    // Functionality of clicking a column.
    $('td').click(function() {
    	// Game must be running to make a move.
    	if (gameRunning) {
    		td = $(this);
    		var square = squareHasChecker(td);
    		moves++;
	    	// Determines the square that results from clicking a column.
	    	if (!square) {
	    		//Added chip falling sound.
	    		document.getElementById('chip').play();
	    		var checker = whichCheckerForCurrentPlayer(player);
	    		var rowIndex = $(this).index();
	    		for (var i = 6; i >= 0; i--) {
	    			if ($('tr:nth-child(' + i + ') > td').eq(rowIndex).html() == '') {
	    				var lowestRow = $('tr:nth-child(' + i + ') > td').eq(rowIndex);
	    				chooseSquare(lowestRow, checker);
	    				break;
	    			}
	    		};
	    			// Ends the game if the board is full.
	    			if (hasPlayerWon(table, checker)) {
	    				winner();
	    			} else if (moves > 41) {
	    				alert('The board is full. There are no more moves!');
	    				turn.html("Nobody won!");
	    			} else {
	    				player = nextPlayer(player);
	    				whosTurnIsIt(turn, player);
	    		};
	    	// Result of clicking on an occupied square.
	    	} else {
	    		alert('This square already has a checker!');
	    	};
	    // Result of clicking on the board after a winner and before a new game.
    	} else {
    		document.getElementById('bill').play();
    		// alert('Game over man, game over!');
    	};
    });

    // Functionality of New Game button.
    $('#new-game').click(function() {
    	gameRunning = true;
    	moves = 0;
    	reset(table);
    	whoGoesFirst++;
    	if (whoGoesFirst%2 > 0) {
    		player = 1;
    	} else {
    		player = 2;
    	}
    	whosTurnIsIt(turn, player);
    	$('.winner').fadeOut(2000);
    	$('.playerone').css("animation", "none");
    	$('.playertwo').css("animation", "none");
    })

    // Functionality of New Score button.
    $('#new-score').click(function() {
    	playerOneWins = 0;
    	$("#black").text(playerOneWins);
    	playerTwoWins = 0;
    	$("#red").text(playerTwoWins);
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
	    	$('#turn').css("background", "#181914").css("color", "white");
	    } else {
	    	$('#turn').css("background", "#A61723").css("color", "white");
	    }
    }

    // Resets the board by clearing the classes.
    function reset(table) {
    	table.find('td').each(function() {
    		$(this).removeClass('black').removeClass('red').empty();
    	})
	}

    // Animates who won and updates number of games won.
    function winner() {
    	$('.winner').remove();
    	document.getElementById('yay').play();
    	var newWinnerElement = $("<p>Player " + player + " is the winner!</p>").addClass('winner').insertAfter('button:last').hide();
    	newWinnerElement.fadeIn(2000);
    	if (player == 1) {
		    playerOneWins++;
		    $("#black").text(playerOneWins);
		    $('.winner').css("animation", "highlightBlack 1s infinite alternate");
		    $('.playerone').css("animation", "highlightBlack 1s 4 alternate");
		} else {
		    playerTwoWins++;
		    $("#red").text(playerTwoWins);
		    $('.winner').css("animation", "highlightRed 1s infinite alternate");
		    $('.playertwo').css("animation", "highlightRed 1s 4 alternate");
		}
		return gameRunning = false;
    }

    // Checks possible winning combinations. The horizontal check has been refactored.
    function hasPlayerWon(table, checker) {
		for (var i = 0; i < cells.length-3; i++) {
			if 	((cells[i].parentNode.rowIndex === cells[i+3].parentNode.rowIndex) &&
				(cells[i].classList.contains(checker) && cells[i+1].classList.contains(checker) && cells[i+2].classList.contains(checker) && cells[i+3].classList.contains(checker))) {
				won = 1;
				console.log('Winner');
			}
        }
    
    	if (table.find('#a1').hasClass(checker) && table.find('#b1').hasClass(checker) && table.find('#c1').hasClass(checker) && table.find('#d1').hasClass(checker)) {
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
});