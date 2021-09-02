const printMessage = function(msg){
		var div = document.createElement('div');
		div.innerHTML = msg;
		document.getElementById('messages').appendChild(div);
}

const clearMessages = function(){
	document.getElementById('messages').innerHTML = '';
}
const displayResult = function(argPlayerMove, argComputerMove){
    if (argPlayerMove == paper && argComputerMove == rock ||
    argPlayerMove ==rock && argComputerMove == scissors ||
    argPlayerMove ==scissors && argComputerMove == paper
  ) {
        printMessage('Wygrywasz!') ;
        playerResult ++;
        spanPlayerResult.textContent = playerResult;
    }
    else if (argPlayerMove == argComputerMove) {
        printMessage('Remis!');
    }
    else {
        printMessage('Przegrywasz :(');
        computerResult ++;
        spanComputerResult.textContent = computerResult;
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

const getMoveName = function(argMoveId) {
    if (argMoveId == 1) {
        return rock;
    }
    else if (argMoveId == 2) {
        return paper;
    }
    else if (argMoveId == 3) {
        return scissors;
    }
    else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return rock;
    }
}

const buttonClicked = function(argButtonName) {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    clearMessages();
    printMessage('Mój ruch: ' + computerMove);
    printMessage('Twój ruch: ' + argButtonName);
    displayResult(argButtonName, computerMove);
}

const buttonClickedReset = function() {
    playerResult = 0;
    computerResult = 0;
    spanPlayerResult.textContent = playerResult,
    spanComputerResult.textContent = computerResult;
}
