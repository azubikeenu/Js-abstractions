import { isValidInputs } from "./utils/isvalidInput.js"
export class AlertService {
    constructor() {
        this.errorBox = document.querySelector( "#error" );
    }

    handleAddition ( inputs, numbers ) {
        const fullMessage = inputs.reduce( ( message, currentValue, index ) => {
            if ( isValidInputs( numbers[index] ) ) {
                message += "";
            } else {
                message += `\n ${currentValue} is not a number`;
            }
            return message;

        }, "Please enter only valid numbers " )

        this.errorBox.classList.remove( "invisible" );
        this.errorBox.innerText = fullMessage;
    }

    hideErrors () {
        this.errorBox.classList.add( "invisible" );

    }

}