// var computerMove, playerMove;
// computerMove = 'kamień';
// printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
// playerMove = 'papier';
// printMessage('Mój ruch to ' + playerMove + ' Wygrywam');
//
// var randomNumber;
// randomNumber = Math.floor(Math.random() * 9 + 11);
// printMessage('Wylosowana liczba to: ' + randomNumber);

//Computer move

var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else if (randomNumber == '2') {
  computerMove = 'papier';
} else if (randomNumber == '3') {
  computerMove = 'nożyce';
} else {
  computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);

//Player move

var playerInput, playerMove;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else if (playerInput =='3') {
  playerMove = 'nożyce';
} else {
  playerMove = 'nieznany ruch';
}
printMessage('Twój ruch: ' + playerMove);



computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
displayResult(playerMove, computerMove);
