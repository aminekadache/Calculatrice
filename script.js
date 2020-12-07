class Calculatrice{  
    constructor(previousOperandTextElement,currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

clear(){
this.currentOperand = ''
this.previousOperand = ''
this.operation = undefined
}

delete(){

}

appendNumber(number){
    if (number ==='.' && this.currentOperand.includes('.')) return
    if (number ==='.' && this.currentOperand ==='') {
         this.currentOperand = 0
    }
 this.currentOperand = this.currentOperand.toString() + number.toString() 
}

chooseOperation(operation){
        if(this.currentOperand === '')return
        if(this.previousOperand !== ''){this.compute(this.previousOperand,this.currentOperand)}
        this.operation = operation
        this.previousOperand = this.currentOperand.toString() + operation.toString()
        this.currentOperand = ''
    }

compute(){

}

updateDisplay(){
  this.currentOperandTextElement.innerText = this.currentOperand
  this.previousOperandTextElement.innerText = this.previousOperand
}

}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsOperation = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-courrent-operand]')


const calculatrice = new Calculatrice(previousOperandTextElement,currentOperandTextElement)

allClearButton.addEventListener('click',()=>{
    console.log('AC');
    calculatrice.updateDisplay()
})
numberButtons.forEach(button=>{
    button.addEventListener('click',()=> {
        calculatrice.appendNumber(button.innerText)
        console.log(button.innerText);
        calculatrice.updateDisplay()
    })
})
operationButtons.forEach(button=>{
    button.addEventListener('click',()=>{
        calculatrice.chooseOperation(button.innerText)
        console.log(button.innerText);
        calculatrice.updateDisplay()
    })
})