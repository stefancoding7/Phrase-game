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
       return phraseUl.childNodes;
    }

    checkLetter(letter){
        let letterLower =  letter.toLowerCase();
        letterLower = this.phrase.search(letterLower)
        if(letterLower.length >= 1){
            return true;
        }
    }

    showMatchedLetter() {

    }
}

const test = new Phrase('Helloe hgfh');

console.log(test.checkLetter(''));
