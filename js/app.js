let game;

function resetDisplay() {
  document.getElementById('overlay').style.display = 'none';
  var randomPhrase = document.querySelectorAll('#phrase ul li');
  if (randomPhrase.length > 1) {
    for (let i = 0; i < randomPhrase.length; i++) {
      randomPhrase[i].remove();
    }
  }
}

function markButton(key) {
  game.handleInteraction(key);
}


document.getElementById('btn__reset').addEventListener('click', function(){
  game = new Game(0);
  resetDisplay();
  game.startGame();  
});

document.addEventListener('click', function(event){

  if (event.target.className === 'key') {
    markButton(event.target);
  }
});
