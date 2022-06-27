const display = document.getElementById('display')
let expression = []
const historico = document.getElementById('historico')
const buttons = document.querySelectorAll('button')

buttons.forEach(button => button.addEventListener('click', () => {
    if(isNaN(button.id) & button.id != '='){
        if(display.textContent != ''){expression.push(display.textContent)}
        display.textContent = ''
        expression.push(button.id)
        console.log(expression)
        historico.textContent = operate(expression)
    }
    if(!isNaN(button.id)){
        display.textContent += button.id
    }
    if (button.id === '='){
        expression.push(display.textContent)
        display.textContent = ''
        historico.textContent = operate(expression)
    }
    
}))

function operate(array){
    let operators = []
    let numbers = []
    for (let values of array){
        if (isNaN(values)){operators.push(values)}
        else {numbers.push(values)}
    }
    if (operators.length != numbers.length){operators.splice(0,0,'+')}
    console.log(operators, numbers)
    let inicial = 0
    let i = 0
    let result = numbers.reduce((inicial, value) => {
        if(operators[i] === '+'){inicial += Number(value)}
        else if (operators[i] === '-'){inicial -= Number(value)}
        else if (operators[i] === '*'){inicial *= Number(value)}
        else if (operators[i] === '/'){
            if (Number(value) === 0){ inicial= 'You should not do this.'}
            else {inicial /= Number(value)}
        }
        console.log(i)
        i++
        return inicial
    }, inicial)
    console.log(result)
    return result
}

