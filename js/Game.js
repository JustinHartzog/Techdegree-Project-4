const phrase = new Phrase();
class Game {
  constructor(missed, phrases) {
    this.missed = missed;
    this.phrases = phrases;
  }


  getRandomPhrases() {
    var randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    return randomPhrase;
  }


  handleInteraction(key) {
    phrase.showMatchedLetter(key);
    this.checkForWin();
    if (phrase.checkLetter(key) === false){
      this.removeLife();
    }
  }

  removeLife() {
    this.missed += 1;
    let lives = document.getElementsByClassName('tries');
    lives[0].remove();
    if (this.missed === 5) {
      this.gameOver('You Lose');
    }
  }


  checkForWin() {
    let letters = document.getElementsByClassName("hide");
    if (letters.length === 0) {
      this.gameOver('You Win');
    }
  }

  gameOver(message) {
    document.getElementById('overlay').style.display = '';
    document.getElementById('game-over-message').textContent = message;
    var chosenKeys = document.getElementsByClassName('chosen');
    var wrongKeys = document.getElementsByClassName('wrong');
    if (chosenKeys.length > 0) {
      for (let i = 0; i < chosenKeys.length; i++) {
        chosenKeys[i].className = 'key';
        i--;
      }
    }
      if (wrongKeys.length > 0) {
        for (let i = 0; i < wrongKeys.length; i++) {
          wrongKeys[i].className = 'key';
          i--;
        }

    }

    const scoreboard = document.querySelector('#scoreboard > ol');
    const heart = '<li class="tries"><img src="images/liveHeart.png" height="35px" widght"30px"></li>'
    while(scoreboard.children.length !== 5) {
      scoreboard.innerHTML += heart;
    }
    this.missed = 0;
    console.log(this.missed);
  }

  startGame() {
      phrase.addPhraseToDisplay(this.getRandomPhrases());

  }
}
