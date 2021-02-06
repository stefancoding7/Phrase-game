/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = null;
     }


    createPhrases() {
        let phrases = [];
      
        phrases = [new Phrase('egyik'), new Phrase('I miss you'), new Phrase('Today is sunday'), new Phrase('I dont know'), new Phrase('Any time')]
        
        return phrases;
    }

    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.phrases[this.getRandomPhrase()];
       // let test = new Phrase(this.activePhrase);
        this.activePhrase.addPhraseToDisplay();
    } 

    getRandomPhrase() {
        let random = Math.floor(Math.random() * 4);
        return random;
    }

    

    handleInteraction(letter) {
        let button = document.querySelectorAll('.key');
        
        for(let i = 0; button.length > i; i++) {
           let buttonValue = button[i].textContent;
         //  console.log(buttonValue)
          if(letter == buttonValue) {
              
            button[i].disabled = true;
          //  console.log(button[i])
          } 

          if(letter == buttonValue && this.activePhrase.checkLetter(letter)) {
            button[i].classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter);
            
           
            if(this.checkForWin()){
                let game = 'win';
                this.gameOver(game);
            }
            
          } 
          
          if(letter == buttonValue && !this.activePhrase.checkLetter(letter)) {
            button[i].classList.add('wrong');
            this.removeLife();
          }
        }

    }

    removeLife() {
        let li = document.querySelectorAll('#scoreboard > ol > li');
        
        for(let i = 0; li.length > i; i++) {
             li[this.missed].firstElementChild.src = 'images/lostHeart.png';
        }
        this.missed++;
        if(this.missed == 5) {
            let game = 'lose';
            this.gameOver(game);
        }
    }

    checkForWin() {
       const correct = document.querySelectorAll('.show');
       
        if(this.activePhrase.phrase.length === correct.length) {
            return true;
        } else {
            return false;
        }

    }

    gameOver(game) {
        const message = document.querySelector('#game-over-message');
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'block';
        overlay.classList.remove('start');

        if(game === 'win') {
            overlay.classList.add('win');
            message.textContent = 'You are the winner.';
        }
        if(game === 'lose') {
            overlay.classList.add('lose')
            message.textContent = 'Maybe next time. Lose';
        }
    }

    
 }

//  const test = new Game;
// test.createPhrases()
// test.startGame()
// //test.removeLife();
// let button = document.querySelectorAll('.key');
// for(let i = 0; button.length > i; i++) {
//     button[i].addEventListener('click', (e) => {
//        // console.log(e.target.textContent)
//         test.handleInteraction(e.target.textContent);
//     })
// }



