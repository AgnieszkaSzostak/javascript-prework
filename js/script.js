function displayResult(argPlayerMove, argComputerMove){
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień' || argPlayerMove =='kamień' && argComputerMove == 'nożyce' || argPlayerMove =='nożyce' && argComputerMove == 'papier') {
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

function getMoveName(argMoveId) {
    if (argMoveId == 1) {
        return 'kamień';
    }
    else if (argMoveId == 2) {
        return 'papier';
    }
    else if (argMoveId == 3) {
        return 'nożyce';
    }
    else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
    }
}

//Computer move

function buttonClicked(argButtonName) {
    let playerMove = argButtonName;
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    clearMessages();
    printMessage('Mój ruch: ' + computerMove);
    printMessage('Twój ruch: ' + argButtonName);
    displayResult(argButtonName, computerMove);
}

function buttonClickedReset() {
    playerResult = 0;
    computerResult = 0;
    spanPlayerResult.textContent = playerResult,
    spanComputerResult.textContent = computerResult;
}

let computerResult = 0;
let playerResult = 0;
const spanPlayerResult = document.getElementById('playerResult');
const spanComputerResult = document.getElementById('computerResult');
const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');
const buttonReset = document.getElementById('reset');
const spanPlayerResult.textContent = playerResult;
const spanComputerResult.textContent = computerResult;
buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });
buttonReset.addEventListener('click', function(){ buttonClickedReset()});
