// get inputs from the users
export const isValidInputs = ( ...inputs ) => {
    return inputs.every( ( value ) => !isNaN( value ) && typeof value === "number" )

}