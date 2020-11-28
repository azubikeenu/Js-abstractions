
import { parseInputs } from "./utils/parseInputs.js"
import { isValidInputs } from "./utils/isvalidInput.js"


export const run = ( alertService, componentService ) => {
    // hide the notification error 
    alertService.hideErrors();

    // perform the addition 
    componentService.performAddition( () => {
        alertService.hideErrors();
        // get the inputs 
        const inputs = componentService.getValues();
        // parse the inputs 
        const numbers = parseInputs( ...inputs );
        // check if the inputs are valid 
        if ( isValidInputs( ...numbers ) ) {
            const [firstNumber, secondNumber] = numbers;
            // if inputs are valid display the results 
            componentService.displayResult( firstNumber + secondNumber );
        } else {
            // else display notification 
            alertService.handleAddition( inputs, numbers );
            componentService.displayResult( "" );
        }

    } )



}