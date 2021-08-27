var computerMove, randomNumber, argButtonName, playerInput, playerMove;
var buttonPaper, buttonRock, buttonScissors;
var playerResult, computerResult;
var spanPlayerResult, spanComputerResult;
var buttonReset

function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
      printMessage('Wygrywasz!');
      playerResult ++;
      spanPlayerResult.textContent = playerResult;
      console.log('playerResult = ' + playerResult);
    }
    else if (argPlayerMove =='kamień' && argComputerMove == 'nożyce') {
      printMessage('Wygrywasz!');
      playerResult ++;
      spanPlayerResult.textContent = playerResult;
    } else if (argPlayerMove =='nożyce' && argComputerMove == 'papier') {
      printMessage('Wygrywasz!');
      playerResult ++;
      spanPlayerResult.textContent = playerResult;
    } else if (argPlayerMove == argComputerMove) {
      printMessage('Remis!');
    } else {
      printMessage('Przegrywasz :(');
      computerResult ++;
      spanComputerResult.textContent = computerResult;
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}


function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } else if (argMoveId == 2) {
      return 'papier';
    } else if (argMoveId == 3) {
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
      return 'kamień';
    }
}

//Computer move

function buttonClicked(argButtonName) {
    console.clear();
    console.log('wywołano funkcję buttonClicked z argumentem: ' + argButtonName);
    clearMessages();
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    playerMove = argButtonName;
    console.log('1.playerMove = ' + playerMove);
    if (playerMove == 'button-rock'){
      playerMove = 'kamień';
    }
    if (playerMove == 'button-paper'){
      playerMove = 'papier';
    }
    if (playerMove == 'button-scissors'){
      playerMove = 'nożyce';
    }
    console.log('2.playerMove = ' + playerMove);
    printMessage('Mój ruch: ' + computerMove);
    printMessage('Twój ruch: ' + playerMove);
    console.log('ruch gracza to: ' + playerMove);
    displayResult(playerMove, computerMove);
}

function buttonClickedReset() {
  playerResult = 0;
  computerResult = 0;
  spanPlayerResult.textContent = playerResult;
  spanComputerResult.textContent = computerResult;
}
// computerResult = 0;


playerResult = 0;
spanPlayerResult = document.getElementById('playerResult');
spanPlayerResult.textContent = playerResult;

computerResult = 0;
spanComputerResult = document.getElementById('computerResult');
spanComputerResult.textContent = computerResult;

console.log('spanPlayerResult =' + spanPlayerResult);
console.log('spanComputerResult =' + spanComputerResult);
buttonRock = document.getElementById('button-rock');
console.log('Przypisano do zmiennej buttonRock wartość: ' + buttonRock );
buttonRock.addEventListener('click', function(){ buttonClicked('button-rock'); });
buttonPaper = document.getElementById('button-paper');
buttonPaper.addEventListener('click', function(){ buttonClicked('button-paper'); });
buttonScissors = document.getElementById('button-scissors');
buttonScissors.addEventListener('click', function(){ buttonClicked('button-scissors'); });
buttonReset = document.getElementById('reset');
buttonReset.addEventListener('click', function(){ buttonClickedReset()});
