// function play() {


//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden')
// }


function keyboardButtonPress(event){
    const playerPressed = event.key;
    

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    

    if(playerPressed === expectedAlphabet){
        console.log('you get a point');

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore)
        
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        
        // const newScore = currentScore + 1;
        
        // currentScoreElement.innerText = newScore

        removeBackgroundColor(expectedAlphabet)
        continueGame();
    }
    else{
        console.log('You missed. You lost a life.')

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife -1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver()
        }

        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // const newLife = currentLife - 1;

        // currentLifeElement.innerText = newLife
    }
}

document.addEventListener('keyup', keyboardButtonPress )

function continueGame(){
    const alphabet = getRandomAlphabets()
    // console.log('your random alphabet:', alphabet)

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet

    setBackgroundColor(alphabet)
}

function play(){
    hideElementById('home-screen');
     hideElementById('final-score')
    removeElementById('play-ground');

    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score',0)

    continueGame();
}

function gameOver(){
    hideElementById('play-ground')
    removeElementById('final-score')

    const lastScore = getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore)
}