// get inputs from the users
export const parseInputs = ( ...inputs ) => {
    return inputs.map( val => parseFloat( val ) )

}