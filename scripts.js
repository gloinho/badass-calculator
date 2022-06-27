const display1 = document.getElementById('display1')
const display2 = document.getElementById('display2')
let expression = ''
let lastOperator;
const buttons = document.querySelectorAll('button')

buttons.forEach(button => button.addEventListener('click', () => {
    if(isNaN(button.id) & button.id != '='){
        lastOperator = button.id
        display1.textContent = ''
        display2.textContent = operate(button.id)
        expression = '' 
    }
    if(!isNaN(button.id)){
        if(display1.textContent === '0'){display1.textContent = ''}
        expression += button.id
        display1.textContent += button.id
    }
    if(button.id ==='='){
        display1.textContent=''
        display2.textContent = operate(button.id)
        expression = ''   
    }
}))

let firstValue = 0
function operate(operator){
    switch(operator) {
        case '+':
            firstValue += Number(expression)
            break;
        case '-': 
            firstValue -= Number(expression)
            break;
        case '/':
                if (Number(expression) === '') {firstValue = 0}
                else {firstValue /= Number(expression)}
            break;
        case '*':
            firstValue *= Number(expression)
            break;
        case '=':
            if(lastOperator ==='+'){firstValue += Number(expression)}
            else if(lastOperator ==='-'){firstValue -= Number(expression)}
            else if (lastOperator === '/'){
                if (Number(expression) === 0){firstValue = 'Error'}
                else{firstValue /= Number(expression)}
            }
    }
    return firstValue
}




