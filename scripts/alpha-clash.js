// function play() {


//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden')
// }


function continueGame(){
    const alphabet = getRandomAlphabets()
    console.log('your random alphabet:', alphabet)

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet

    setBackgroundColor(alphabet)
}

function play(){
    hideElementById('home-screen');
    removeElementById('play-ground');
    continueGame();
}