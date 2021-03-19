# oop_game-v2
<h1>Phrase Hunter game (OOP)</h1>

<p>This game is a browser-based word guessing game using OOP. The game chooses a random phrase, split the phrase into letters, and put those letters onto the gameboard. Each time the player guesses a letter, the program compares the letter the player has chosen with the random phrase</p>

<h3>Features</h3>
<ul>
    <li><b>Level system</b>
    <p>1. The game starts from level 1. Every time when you solve the phrase you will jump to the next level and the specific time will decrease by 20 seconds</p>
    <p>2. If the time will out the game start again from level 1</p>
    <p>3. You could easily configure how many levels you would like to set for the game(app.js - line 13)</p>
    </li>
    <li><b>Timer</b>
    <p>1. You have preset time to solve the phrase.</p>
    <p>2. If the time will out you lose the game</p>
    <p>3. You could easily configure the max time for level 1 (app.js - line 17)</p>
    </li>
    <li><b>Hint</b>
    <p>1. Show random letter from the phrase</p>
    <p>2. You have 5 hints for all levels so if you use all hints for level 1 you don't have any more for the rest of the levels.</p>
    </li>
    <li><b>Background Change</b>
    <p>1. For every level background is changing</p>
    </li>
     <li><b>Shake</b>
    <p>1. Shake the pharse if choosed letter is wrong</p>
    </li>
</ul>

<h3>Set the game to your own rules</h3>


```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```



    ```javascript
    const maxLevel = 21;        /* set the max level of the game. After when gamer hits the max level the game will end
                            * forexample if you set level 3 the gamer when hit level 2 will win the game becasue level 3 is a max value.. so if 
                            * you would like to finish the game with level 3 set the value to level 4
                            */
    ```
<br>
const percent = 50;         /* help beginning of the game. this value is percentage (%), so if you set maxLevel to 20 and percent to 25 in first 5 level get  random few letter  to help 
                            */
<br>
const startingTime = 450;   // set the starting time for level 1 - (180 seconds means 3 minutes)
<br>

const decreaseTime = 20;    //every time when level is go up will decrease from the current time the given number 
                            //forexample if you give 20 seconds in next level will decrease by 20 seconds

<br>
const randomPhrase = false; /* true -> the same phrase could repeat any time 
                             * false -> take off already solved phrases, so can not be the same phrase in one game
                             */
<br>
const setHint = 15;         /* 
                            * Set hint to any number
                            * 
                            */   