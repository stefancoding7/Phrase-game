/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



const startButton = document.querySelector('#btn__reset');
let button = document.querySelectorAll('.key');
const game = new Game;

startButton.addEventListener('click', () => {
   
    
    const li = document.querySelectorAll('#phrase > ul > li');
    const ul = document.querySelector('#phrase > ul');
    const key = document.querySelectorAll('.key');
    console.log(li);
    for(let i = 0; li.length > i; i++) {
        ul.removeChild(li[i])
    }
    for(let i = 0; key.length > i; i++) {
        key[i].classList.remove('chosen');
        key[i].classList.remove('wrong');
        key[i].disabled = false;

    }
    let liImage = document.querySelectorAll('#scoreboard > ol > li');
        
        for(let i = 0; liImage.length > i; i++) {
            liImage[i].firstElementChild.src = 'images/liveHeart.png';
        }

    game.missed = 0;
    game.startGame();
});



for(let i = 0; button.length > i; i++) {
    button[i].addEventListener('click', (e) => {
        
       // console.log(e.target.textContent)
        game.handleInteraction(e.target.textContent);
    })
}