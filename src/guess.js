const alphabet = 'abcdefghijklmnopqrstuvwxyz';
// this line declares a constant variable that takes in a string of the alaphabet in lowercase
function setupGuesses(element, handleGuess) {
  //seutupguesses is taking in two parameters, element(represents the html element where buttons will be appended)and handleGuess
  alphabet.split('').forEach((letter) => {
    //all the letter are being split up using the for eachmethod 
    const btn = document.createElement('button');
    //creating a button element for each letter in the array called btn 
    btn.innerText = letter;
    //the btn text is set to the current letter
    btn.addEventListener('click', (e) => handleGuess(e, letter));
    //click event listener added when button is clicked the letter is passed to the handleGuess function 
    element.append(btn);
    //button appened to the specific HTML element
  });
}

export default setupGuesses;
