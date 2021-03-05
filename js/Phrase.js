/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {

    constructor(phrase, region) {
        this.phrase = phrase.toLowerCase();
        this.region = region;
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
            const region = document.querySelector('#region');
            if(this.phrase[i] === ' ') {
               li.className = 'space';
               li.textContent = ' ';
               phraseUl.appendChild(li);
            } else {
                li.className = `hide letter ${this.phrase[i]}`;
                li.textContent = this.phrase[i];
                li.style.fontSize = '0px'; // set the font size to 0px avoid to see letters by selecting
                region.textContent = this.region;
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
                document.querySelector('#phrase').classList.remove('shake');
                return true;
               
            } else {
                const phrase = document.querySelector('#phrase');
                phrase.classList.add('shake'); //set class to shake
                let stop = 250; // set the shake time
                
                // if missed hit 4 tha sake method set to 0
                if(game.missed === 4) {
                    stop = 0;
                }
                
                //after 0.25 second remove classname 'shake'
                setTimeout(function() {
                    phrase.classList.remove('shake');
                }, stop)
               
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
     * @return {boolean}
     */
    showMatchedLetter(letter) {
        let letterFinded = document.querySelectorAll(`.${letter}`);

        for(let i = 0; letterFinded.length > i; i++) {
           letterFinded[i].classList.remove('hide');
           letterFinded[i].classList.add('show');
           
            letterFinded[i].style.transition = "all 1s";
            letterFinded[i].style.fontSize = '40px';
        }

        return true;
        
    }
}


