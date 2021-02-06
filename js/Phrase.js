/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {

    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    
    addPhraseToDisplay() {
      const phraseUl = document.querySelector('#phrase > ul');
       console.log(this.phrase);
       for(let  i = 0; this.phrase.length > i; i++){


           let li = document.createElement('li');
           if(this.phrase[i] === ' ') {
               li.className = 'space';
               li.textContent = ' ';
               phraseUl.appendChild(li);
           } else {
            li.className = `hide letter ${this.phrase[i]}`;
            li.textContent = this.phrase[i];
            phraseUl.appendChild(li);
           }
           
       }
       console.log(phraseUl.childNodes)
       return phraseUl.childNodes;
    }

    checkLetter(letter){
        let letterLower =  letter.toLowerCase();
       // console.log(letterLower)
        letterLower = this.phrase.search(letterLower);
       // console.log(letterLower)
       
            if(letterLower > -1){
              //  console.log('fin')
                return true;
               
            } else {
              //  console.log('not fin')
                return false;
            }
       
       
    }

    showMatchedLetter(letter) {
        let letterFinded = document.querySelectorAll(`.${letter}`);
        for(let i = 0; letterFinded.length > i; i++) {
           letterFinded[i].classList.remove('hide');
           letterFinded[i].classList.add('show');
        }
    }
}

// const test = new Phrase('tHello');
// test.addPhraseToDisplay();
// test.checkLetter('e');
// test.showMatchedLetter('o');

