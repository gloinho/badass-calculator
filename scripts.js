const display1 = document.getElementById('display1')
const display2 = document.getElementById('display2')
let firstValue = 0
let expression = [firstValue]
const buttons = document.querySelectorAll('button')

buttons.forEach(button => button.addEventListener('click', () => {
    if(button.id ==='='){
        display1.textContent = operate(expression[1]) 

    }

    if(!isNaN(button.id)){
        lastNumber = Number(button.id)
        if (expression.length===1){expression.push('+')}
        if (expression[2]===undefined){expression.push(button.id)}
        else (expression[2] += button.id) 
        display2.textContent += button.id
        
    }

    if(isNaN(button.id) & button.id != '='){
        console.log(expression)
        display1.textContent = operate(expression[1])
        lastOperator = button.id
        expression.push(button.id)
        display2.textContent += button.id
    }
}))


function operate(operator){
    switch(operator) {
        case '+':
            if(isNaN(expression[2])){firstValue += lastNumber}
            else{firstValue += Number(expression[2])}
            break;
        case '-':
            if(isNaN(expression[2])){firstValue -= lastNumber}
            else {firstValue -= Number(expression[2])}
            break;
        case '/':
            if (Number(expression[2]===0 || lastNumber === 0)){firstValue = 'You can\'t divide by zero'}
            else if(isNaN(expression[2])){firstValue /= lastNumber}
            else {firstValue /= Number(expression[2])}
            break;
        case '*':
            if(isNaN(expression[2])){firstValue *= lastNumber}
            else {firstValue *= Number(expression[2])}
            break;
    }
    if(expression.length===3){expression = [firstValue]}
    return firstValue
}




