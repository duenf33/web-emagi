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
            const searchInput = search(userInput);
            const h1Results = document.querySelector('h1');
            h1Results.innerHTML = '';
            for(const inputs in searchInput){
            console.log(inputs)
            const newParagraph = document.createElement('p');
            newParagraph.innerText = searchInput[inputs].symbol +` ${searchInput[inputs].name}`;
            h1Results.appendChild(newParagraph);
            }
            break;
        case "random":
            const getCat = getCategory(userInput);
            if(getCat.length === 0){
                userOutput.innerText = randomElement(emojis).symbol;
            } 
            if(getCat.length !== 0){
                userOutput.innerText = randomElement(getCategory(userInput)).symbol;
            }
            break;
        default:
            console.log('bug');
        break
    }

}

/*******************
 * EVENT LISTENERS *
 *******************/
button.addEventListener('click', buttonPressed);




