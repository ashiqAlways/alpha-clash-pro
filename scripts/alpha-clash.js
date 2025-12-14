// function play(){
//     // step-1: hide the home screen. to hide the screen add the class hidden to the home setion
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
   
//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }



function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    
    // key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // check right or wrong key pressed
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');
        // update score:
        // 1. get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText)
        console.log(currentScore);

        // 2. increase the score by 1
        const newScore = currentScore + 1;
        
        // 3. show the update score
        currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }
    else {
        console.log('you missed. you lost a life');
        // setp-1: get the current Life number
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);

        // step-2: reduce the life count
        const newLife = currentLife - 1;

        // step-3: display the update life count
        currentLifeElement.innerText = newLife;
    }
}

// capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent);


function continueGame(){
    // setp -1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('you random alphabet:', alphabet);

    // set randomly generated alphabet to the screen (sow it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    
    // set backround color
    setBackroundColorById(alphabet)
}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

