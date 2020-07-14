const Hangman = function(word, remainingGuesses) {
    this.word = word.toLowerCase()
    this.remainingGuesses = remainingGuesses
}

const game1 = new Hangman('cat',2)
console.log(game1.getPuzzle())

const game2 = new Hangman('New jersey',4)
console.log(game2.getpuzzle())