function submitData() {

    let minRange = parseFloat(guessForm.min.value);
    let maxRange = parseFloat(guessForm.max.value);
    if(isNaN(minRange)) {
        updateDOM(`There was an error in your input. Please make sure to enter numbers and that the minimum is less than the maximum.`, "red");  //Validating the maximum value as a number.
        }
        else if(isNaN(maxRange))
        {
            updateDOM(`There was an error in your input. Please make sure to enter numbers and that the minimum is less than the maximum.`, "red");
        }

        else if(maxRange < minRange){ //Tests if the minimum number in the range is less than the maximum number and displays an error if it the statement is true.
            updateDOM('There was an error in your input. Please make sure to enter numbers and that the minimum is less than the maximum.', "red");
        }
        else {
           numberGuessGame(minRange, maxRange)
        }
}

function updateDOM(value, color) {   //This function updates the DOM depending on what parameters are passed through it through other functions.
    document.getElementById("validation").innerHTML = value;
    document.getElementById("validation").style.color = color;


}


function numberGuessGame(min, max) {
    let number = randomNumber(min, max);
    let message = prompt(`I am thinking of a number between ${min} and ${max}. Try to guess it!`)
    // declare message variable with something like , "I'm thinking of a number between 'min' and 'max', try to guess it"
    let guess; // declare guess as empty variable so you can modify it from the loop
    let i = 1 ;
    do {
        
        guess = parseInt(message);

        if (guess<number) {
           message = prompt(`Your guess of ${guess} is too low! Try again!`);
           i++;
        }
        else if (guess>number) {
            message = prompt(`Your guess of ${guess} is too high! Try again!`);
            i++;
        }

        // if too low modify message to say that their guess is too low
        // if too high, modify message to say that they guess is too high
    } while(guess != number)
    message = `Congratulations, you guessed the number! It was ${number}! It took you ${i} guesses!`
    // modify message to say congratulations!!!
    updateDOM(message, "green");
}

function randomNumber(min,max) {    //THIS CODE IS SUPPOSED TO RETURN AN INTEGER
    min = Math.ceil(min);
    max = Math.floor(max);
     //The maximum is inclusive and the minimum is inclusive
  
    return Math.floor(Math.random() * (max - min + 1) + min);
}


//ERRORS: Low numbers not validating properly, particularly if min>max.  Low numbers not computing properly, sometimes number is outside of given range.
//  Trouble refreshing once the program has been run.