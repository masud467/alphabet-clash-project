function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function removeElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}


function setBackgroundColor(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-amber-500')
}

function removeBackgroundColor(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-amber-500')
}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId)
    element.innerText = value
}

function getElementTextById(elementId){
    const element = document.getElementById(elementId)
    const text = element.innerText
    return text;
}


function getRandomAlphabets(){
    const alphabetSting = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetSting.split('');
    // console.log(alphabets)

    const randomNumbers = Math.random()*25;
    const index = Math.round(randomNumbers);
    

    const alphabet = alphabets[index];
    // console.log(index, alphabet)
    return alphabet
}
