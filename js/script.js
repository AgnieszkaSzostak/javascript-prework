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

    let playerMove = argButtonName;
    const randomNumber = Math.floor(Math.random() * 3 + 1),
          computerMove = getMoveName(randomNumber);
    console.clear();
    console.log('wywołano funkcję buttonClicked z argumentem: ' + argButtonName);
    clearMessages();
    console.log('wylosowana liczba to: ' + randomNumber);
    console.log('ruch komputera to: ' + computerMove);
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
  const playerResult = 0,
      computerResult = 0;
  spanPlayerResult.textContent = playerResult,
  spanComputerResult.textContent = computerResult;
}

let computerResult = 0,
    playerResult = 0;

const spanPlayerResult = document.getElementById('playerResult'),
      spanComputerResult = document.getElementById('computerResult'),
      buttonRock = document.getElementById('button-rock'),
      buttonPaper = document.getElementById('button-paper'),
      buttonScissors = document.getElementById('button-scissors'),
      buttonReset = document.getElementById('reset');

spanPlayerResult.textContent = playerResult;
spanComputerResult.textContent = computerResult;
console.log('spanPlayerResult =' + spanPlayerResult);
console.log('spanComputerResult =' + spanComputerResult);
console.log('Przypisano do zmiennej buttonRock wartość: ' + buttonRock );
buttonRock.addEventListener('click', function(){ buttonClicked('button-rock'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('button-paper'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('button-scissors'); });
buttonReset.addEventListener('click', function(){ buttonClickedReset()});
