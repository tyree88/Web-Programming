/*
function tictactoe(input) {
  
    var player = 1;
    var messages = $('.messages');
    var turn = $('.turn');
    displayNextPlayer(turn, player);
    //find if button has X or O in it
    input = $('input').val();
    var state = getState(input);
    //if button does not have either
    console.log(state);
    if(state == 0) 
    {
     //assign current player the letter
      var pattern = assignLetter(player);
      console.log(pattern);
      changeState(input,pattern);
      //check if player won
      if(checkIfPlayerWon(input,pattern)) {
        messages.html('Player '+player+' has won.');
        turn.html('');
      } else {
        player = setNextPlayer(player);
        displayNextPlayer(turn, player);
      }
    }else {
      messages.html('This box is already checked.');
    }

    $('.reset').click(function() {
    player = 1;
    messages.html('');
    reset(table);
    displayNextPlayer(turn, player);
    });
  
}

function getState(input) {
  if(input.value == 'X' || input.value == 'O') {
    return 1;
  } else {
    return 0;
  }
}

function assignLetter(player) {
  if(player == 1) {
    return 'X';
  } else {
    return 'O';
  }
}
//change the state of input
function changeState(input, pattern) {
 input.value = pattern;
}

}

*/
var x = true;
var grid = document.getElementsByTagName("input");
var winner = false;


function tictactoe(input){
    var player = 1;
    var messages = $('.messages');
    var turn = $('.turn');
    displayNextPlayer(turn, player);
    player = setNextPlayer(player);


	if (winner){
		return;
	}
	if (input.value == ""){
		if(x)
        {
			input.value = "X";
			x = false;
			if (checkWinner("X"))
            {
				winner = true;
				alert("Player 1 has won");
                alert("click restart to play again");
			}

		}
		else
        {
			input.value = "O";
			x = true;
			if (checkWinner("O")){
				winner = true;
				alert("Player 2 has won");
                alert("click restart to play again");
			}
        player = setNextPlayer(player);
		}
        displayNextPlayer(turn, player);
    }
	else {
		return;
	}
}
function displayNextPlayer(turn, player) {
  turn.html('Player turn : '+player);
}

function setNextPlayer(player) {
  if(player == 2) {
    return player = 1;
  } else {
    return player = 2;
  }
}

function checkWinner(player){
	/*
		grid
		0 1 2
		3 4 5
		6 7 8
	*/
    
    //starting from first box
	if (grid[0].value == player){
		// horizonal 
		if (grid[1].value == player && grid[2].value == player){
			return true;
		}
		// vertical
		if (grid[3].value == player && grid[6].value == player){
			return true;
		}
		//diagonal
		else if (grid[4].value == player && grid[8].value == player){
			return true;
		}
	}
    // starting from second box
	if (grid[1].value == player && grid[4].value == player && grid[7].value == player){
		return true;
	}
    //starting from thrid box
	if (grid[2].value == player){
		// vertical from 2
		if (grid[5].value == player && grid[8].value == player){
			return true;
		}
		//diagonal
		if (grid[4].value == player && grid[6].value == player){
			return true;
		}
	}
    // starting from second row
	if (grid[3].value == player && grid[4].value == player && grid[5].value == player)
    {
		return true;
	}

	if (grid[6].value == player && grid[7].value == player && grid[8].value == player)
    {
		return true;
	}
	else
    {
		return false;
	}
}
function reset(table) {
  table.find('td').each(function() {
    $(this).removeClass('circle').removeClass('cross');
  });
}
