const display1 = document.getElementById('display1')
const display2 = document.getElementById('display2')
const buttons = document.querySelectorAll('button')
let result = 0
let lastNumber = ''
let expression = ['+']

buttons.forEach(button => button.addEventListener('click', () => {
    button.classList.add('transition') //Button animation.

    if (result === 'You can\'t divide by zero'){clearAll()} 

    if(button.id ==='equal'){
        operate()
        showDisplay2(button)
    };

    if(!isNaN(button.id) || button.id === '.'){
        clearAfterEqual()
        if(expression[1] === undefined){expression[1] = button.id}
        else (expression[1] += button.id)
        lastNumber = expression[1]
        showDisplay2(button)
    };

    if(isNaN(button.id) & button.id != 'equal' & button.id != '.'){
        operate()
        lastOperator = button.id
        expression.push(button.id)
        showDisplay2(button)
    };
 
    if (button.id === 'clearAll'){
        clearAll()
    };

    lowerCaseDisplay1(); // Decreases the font-size if the number is too big
}));

buttons.forEach(button => button.addEventListener('transitionend', removeTransition))


function operate(){
    if (expression.length===2){
        if(!isNaN(expression[1])){expression.reverse()} // Ajusting expression to be in the [number, signal] format.
        // Repeated Signals:
        if(expression[0] === '+' & expression[1] === '+'){result += Number(lastNumber)}
        else if (expression[0] === '-' & expression[1] === '-'){result -= Number(lastNumber)}
        else if (expression[0] === '/' & expression[1] === '/'){result /= Number(lastNumber)}
        else if (expression[0] === '*' & expression[1] === '*'){result *= Number(lastNumber)}
        else if (expression[0] === '-' & expression[1] ==='+' || expression[0] === '+' & expression[1] ==='-' ){result = result*(-1)}
        // Normal expression.
        else{
            switch(expression[1]) {
                case '+':
                    result += Number(expression[0])
                    break;
                case '-':
                    result -= Number(expression[0])
                    break;
                case '/':
                    result /= Number(expression[0])
                    if(result === Infinity){result = 'You can\'t divide by zero'}
                    break;
                case '*':
                    result *= Number(expression[0])
                    break;
                default:
                    result = 'error'
            };
        };
    display1.textContent = result // Shows result on the screen.
    expression = []
    };
};

function clearAll(){
    display1.textContent = 0 
    display2.textContent = 0 
    result = 0
    expression = ['+']
};

function showDisplay2(button){
    if(isNaN(button.id)){
        if(display2.textContent==='0'){display2.textContent = button.id}
        else if (isNaN(display2.textContent[display2.textContent.length-1])){}
        else {display2.textContent += button.id}   
    }
    else{
        if(display2.textContent==='0'){display2.textContent = button.id}
        else{display2.textContent += button.id}
    }
    if(button.id === 'equal'){display2.textContent = display1.textContent}
};

function lowerCaseDisplay1(){
    if(display1.textContent.length>16){
        display1.style.fontSize = '35px'
    }
};

function removeTransition(e){
    if(e.propertyName === 'transform'){
        e.target.classList.remove('transition')
    }
}

function clearAfterEqual(){
    if(display1.textContent === display2.textContent){
        clearAll()
    };
};