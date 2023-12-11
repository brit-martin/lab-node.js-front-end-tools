let word;

function setupWord(element, initWord) { 
    word = initWord;
    word.split('').forEach(() =>{
        element.insertAdjacentHTML('beforeend', '<div class="letter-box"></div>')

    })
}

function isLetterInWord(letter) {
 return word.includes(letter)
}

function revealLetterInWord(letter) {
   let boxElements = document.querySelectorAll(".letter-box");
   for (let i=0; i < boxElements.length; i++){
    if (word[i] === letter){
        boxElements[i].innerHTML = letter
    }
    //if the letter of word at i is equal to letter 

    //then we need to take the respective underscore element
    //and make its innerHTML the letter
    
   }

}




export {setupWord};
export {isLetterInWord};
export {revealLetterInWord};