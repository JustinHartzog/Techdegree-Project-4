class Phrase {
  constructor(phrase) {
    this.phrase = phrase;
  }

  addPhraseToDisplay(word) {
    var randomPhrase = document.querySelector('#phrase ul');
    for (let i = 0; i < word.length; i++) {
      const li = document.createElement('li');
      li.textContent = word[i];
      if (word[i] === ' ') {
        li.className = 'space';
      } else {
        li.className = 'hide letter';
      }
      randomPhrase.appendChild(li);
    }
  }

  checkLetter(key) {
    var correct = false;
    let word = document.querySelectorAll('#phrase li');
    for (let i = 0; i < word.length; i++) {
      if (key.textContent === word[i].textContent){
        correct = true;
        word[i].className = 'show letter';
      }
    }
    return correct;
  }

  showMatchedLetter(key) {
    if (this.checkLetter(key) === true) {
      key.className = 'chosen';
    } else {
      key.className = 'wrong';
    }
  }

}
