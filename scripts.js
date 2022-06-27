const display = document.getElementById('display')
let expression = []
const buttons = document.querySelectorAll('button')

buttons.forEach(button => button.addEventListener('click', () => {
    if(isNaN(button.id) & button.id != '='){
        expression.push(display.textContent)
        display.textContent = ''
        display.textContent = button.id
        expression.push(display.textContent)
        display.textContent = ''
    }
    if(!isNaN(button.id)){
        display.textContent += button.id
    }
    if (button.id === '='){
        expression.push(display.textContent)
        display.textContent = operate(expression)
    }
    

}))






function operate(array){
    let operators = []
    let numbers = []
    for (let values of array){
        if (isNaN(values)){operators.push(values)}
        else {numbers.push(values)}
    }
    let inicial = 0
    let i = -1
    let result = numbers.reduce((inicial, value) => {
        if (inicial === 0) {inicial += Number(value)}
        else if (!(operators[i] === undefined)){
            if(operators[i] === '+'){inicial += Number(value)}
            else if (operators[i] === '-'){inicial -= Number(value)}
            else if (operators[i] === '*'){inicial *= Number(value)}
            else if (operators[i] === '/'){
                if (Number(value) === 0){ inicial= 'You should not do this.'}
                else {inicial /= Number(value)}
        }}
        i++
        return inicial
    }, inicial)
    return result
}

