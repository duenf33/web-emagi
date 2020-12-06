/*******************
 * BUTTON VARIABLE *
 *******************/
const button = document.querySelector('#submit-button');

/*****************
 * MAIN FUNCTION *
 *****************/
const buttonPressed = () => {
    //////////////
    // variables//
    //////////////
    const userInput = document.querySelector('#emagi-input').value;
    const userOutput = document.querySelector('#results');
    const radioButton = document.querySelectorAll('.radio-button');
    
    ////////////////////
    // helper function//
    ////////////////////
    const buttonRadioLoop = (radio) => {
        let checkedValue = '';
        for(const buttons of radio){
            if(buttons.checked === true){
                checkedValue = buttons;
            }
        }
        return checkedValue;
    }
    //////////////////
    // loop function//
    //////////////////
    const switching = buttonRadioLoop(radioButton).value;
    
    switch (switching) {
        case "encode":
            userOutput.innerText = encode(userInput);
            break;
        case "translate":
            userOutput.innerText = translate(userInput);
            break;
        case "madlib":
            userOutput.innerText = madlib(userInput);
            break;
        case "search":
            userOutput.innerText = search(userInput);
            break;
        case "random":
            console.log(getCategory(userInput));
            break;
    }

}

/*******************
 * EVENT LISTENERS *
 *******************/
button.addEventListener('click', buttonPressed);




