/* pseudocode
*
*/

/**
 * all of these variables are for DOM purposes. they target a specific element in my 
 * html file through using the 'querySelector' method
 */
let homeScore = document.querySelector('.home-score')
let guestScore = document.querySelector('.guest-score')
let periodCounter = document.querySelector('.period-counter')
// notice how in the following six variables i am passing in a class
// as an arg then targeting the button in that specific <div> container
let timeoutHome1 = document.querySelector('.onehtimeout button')
let timeoutHome2 = document.querySelector('.twohtimeout button')
let timeoutHome3 = document.querySelector('.threehtimeout button')
let timeoutGuest1 = document.querySelector('.onegtimeout button')
let timeoutGuest2 = document.querySelector('.twogtimeout button')
let timeoutGuest3 = document.querySelector('.threegtimeout button')
let homeFouls = document.querySelector('.hfoul-counter')
let guestFouls = document.querySelector('.gfoul-counter')

/**
 * four global scope variables that keep track of modifiable game values as ints
 * solid naming
 */
let homeScoreNow = 0
let guestScoreNow = 0
let homeFoulNow = 0
let guestFoulNow = 0

/**
 * plusScore
 * managed to refactor the functionality here into this onefunction, were as i originally 
 * had three functions. remember the DRY concept
 * func takes two args one for whether home or guest and the other for how many points
 * uses a series of conditional statements to check which two args have been passed
 * then appropriately increments the global score variable for the appropriate team and by the correct amount of points
 * this incremented global variable is then displayed in the web app itself through using the DOM
 */
function plusScore(team, num) {
    // '===' in JS for the strictest equality check
    // '&&' in JS instead of 'and' python
    // also note the '()' for the specifics of the conditional
    // which isn't a thing in python
    // including ';' when a statement ends is best practice, even though not mandatory
    if (team === 'home' && num === '1') {
        homeScoreNow += 1;
        // here i use the dom to alter the content that the user sees
        // which is all found in the html file
        homeScore.textContent = homeScoreNow;
    }
    // 'else if' in JS instead of 'elif' python
    else if (team === 'guest' && num === '1') {
        guestScoreNow += 1;
        guestScore.textContent = guestScoreNow;
    }
    else if (team === 'home' && num === '2') {
        homeScoreNow += 2;
        homeScore.textContent = homeScoreNow;
    }
    else if (team === 'guest' && num === '2') {
        guestScoreNow += 2;
        guestScore.textContent = guestScoreNow;
    }
    else if (team === 'home' && num === '3') {
        homeScoreNow += 3;
        homeScore.textContent = homeScoreNow;
    }
    else if (team === 'guest' && num === '3') {
        guestScoreNow += 3;
        guestScore.textContent = guestScoreNow;
    }
}
// plusTimeout
// two para for team and which timeout button was pressed
// conditional that checks for which button and team user has selected
// then uses the dom to change the background colour of the <button> to green
function plusTimeout(team, button) {
    if (button === 'onehtimeout' && team === 'home') {
        timeoutHome1.style.backgroundColor = 'green';
    }
    else if (button === 'twohtimeout' && team === 'home') {
        timeoutHome2.style.backgroundColor = 'green';
    }
    else if (button === 'threehtimeout' && team === 'home') {
        timeoutHome3.style.backgroundColor = 'green';
    }
    else if (button === 'onegtimeout' && team === 'guest') {
        timeoutGuest1.style.backgroundColor = 'green';
    }
    else if (button === 'twogtimeout' && team === 'guest') {
        timeoutGuest2.style.backgroundColor = 'green';
    }
    // the only other option is this one, so no need for an 'else if'
    // just use 'else' instead
    else {
        timeoutGuest3.style.backgroundColor = 'green';
    }
}

// plusFouls
// one para checking what team
// increments the global foul count variable for relevant team
// uses dom to show the result of this to the user in the html
function plusFouls(team) {
    if (team === 'home') {
        homeFoulNow += 1;
        homeFouls.textContent = homeFoulNow;
    }
    else {
        guestFoulNow += 1;
        guestFouls.textContent = guestFoulNow;
    }
    }
    
// newGame
// this functions ensures that everything that needs to be 
// reset in a basketball scoreboard for a new game is
// forgot to add ';' at end of each statement initially
function newGame() {
    homeScore.textContent = 0;
    guestScore.textContent = 0;
    homeFouls.textContent = 0;
    guestFouls.textContent = 0;
    homeScoreNow = 0;
    guestScoreNow = 0;
    periodCounter = 1;
    homeFoulNow = 0;
    guestFoulNow = 0;
    timeoutHome1.style.backgroundColor = 'black';
    timeoutHome2.style.backgroundColor = 'black';
    timeoutHome3.style.backgroundColor = 'black';
    timeoutGuest1.style.backgroundColor = 'black';
    timeoutGuest2.style.backgroundColor = 'black';
    timeoutGuest3.style.backgroundColor = 'black';
    }
