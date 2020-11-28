export class Component {
    constructor() {
        this.firstNumber = document.querySelector( "#numberOne" );
        this.secondNumber = document.querySelector( "#numberTwo" );
        this.addValues = document.querySelector( "#addValues" );
        this.result = document.querySelector( "#result" );
    }

    getValues () {
        return [this.firstNumber.value, this.secondNumber.value]
    }

    displayResult ( value ) {
        this.result.innerHTML = value;
    }

    performAddition ( func ) {
        this.addValues.addEventListener( 'click', func )
    }


}