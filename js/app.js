/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


/*
* this section for timer and level settings only ---------START
*
* You could configure the game here by revriting those cons variables
*
*/

const maxLevel = 4; //set the max level of the game. After when gamer hits the max level the game will end
//forexample if you set level 3 the gamer when hit level 2 will win the game becasue level 3 is a max value.. so if 
// you would like to finish the game with level 3 set the value to level 4

const startingTime = 180; // set the starting time for level 1 - (180 seconds means 3 minutes)

const decreaseTime = 20; //every time when level is go up will decrease from the current time the given number 
//forexample if you give 20 seconds in next level will decrease 3 minutes by 20 seconds

/*
*
*
*
* this section for timer and level settings only ---------END
*/



const startButton = document.querySelector('#btn__reset');
const button = document.querySelectorAll('.key');
const overlay = document.querySelector('#overlay');
const hint = document.querySelector('.hint');
const message = document.querySelector('#game-over-message');
const banner = document.querySelector('#banner');
const btn_reset = document.querySelector('#btn__reset');
const header = document.querySelector('.header');


const game = new Game; //new game class


//add click event on start button
startButton.addEventListener('click', () => {
   
    const li = document.querySelectorAll('#phrase > ul > li');
    const ul = document.querySelector('#phrase > ul');
   
    //loop over all li element and remove it
    for(let i = 0; li.length > i; i++) {
        ul.removeChild(li[i])
    }

    //loop over all virtual keyboard set disable false and remove class
    for(let i = 0; button.length > i; i++) {

        button[i].classList.remove('chosen');
        button[i].classList.remove('wrong');
        button[i].disabled = false;

    }


    let liImage = document.querySelectorAll('#scoreboard > ol > li');
        
        //loop over the li images and set all heart images back to the liveHeart.png
        for(let i = 0; liImage.length > i; i++) {
            liImage[i].firstElementChild.src = 'images/liveHeart.png';
        }

    //remove class name 'win' or 'lose'  and set it classname to 'start; 
    if(overlay.className == 'win' || overlay.className == 'lose') {
        overlay.classList.remove('win');
        overlay.classList.remove('lose');
        overlay.classList.add('start');
    }

    game.missed = 0; //set back missed to 0
    
    game.startGame(); //call startGame method from Game class
});


//loop over virtualkeyboard and get the textcontent from each button
for(let i = 0; button.length > i; i++) {

    button[i].addEventListener('click', (e) => {
        
        game.handleInteraction(e.target.textContent);

    })
}

//use keydown event for keyboard and call handleInteraction method
window.addEventListener('keydown', function (e) {
    game.handleInteraction(e.key);
  }, false);

//use event click for hint button and call hintFW method
hint.addEventListener('click', () => {
    game.hintFW();
})

