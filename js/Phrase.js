/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {

    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    
     /**
     * addPhraseToDisplay() method adds that phrase to the board 
     *
     *
     * @return {element} - return li - append li to ul child node
     */
    addPhraseToDisplay() {
      const phraseUl = document.querySelector('#phrase > ul');
      
       //loop over the phrase if there space set the className to 'space'
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
     
       return phraseUl.childNodes; // return li - append li to ul child node
    }

     /**
     * checkLetter() method hecks to see if the letter selected by the player matches a letter in the phrase
     *
     * @param {string} letter - this pramater check if letter content in pharse end set it to lowercase
     * @return {boolean}
     */
    checkLetter(letter){
        let letterLower =  letter.toLowerCase();
        letterLower = this.phrase.search(letterLower);
       
            if(letterLower > -1){
              
                return true;
               
            } else {
              
                return false;
            }
       
    }

    /**
     * showMatchedLetter()reveals the letter(s) on the board that matches the player's selection. 
     * To reveal the matching letter(s), select all of the letter DOM elements that have a CSS class 
     * name that matches the selected letter and replace each selected element's hide CSS class with 
     * the show CSS class.
     *
     * @param {string} letter - could be phrase letter
     * 
     */
    showMatchedLetter(letter) {
        let letterFinded = document.querySelectorAll(`.${letter}`);

        for(let i = 0; letterFinded.length > i; i++) {
           letterFinded[i].classList.remove('hide');
           letterFinded[i].classList.add('show');
           letterFinded[i].style.transition = "all 1s"
        }
        
    }
}


