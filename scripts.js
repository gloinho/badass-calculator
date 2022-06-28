const display1 = document.getElementById('display1')
const display2 = document.getElementById('display2')
const buttons = document.querySelectorAll('button')
let firstValue = 0
let expression = [firstValue]

buttons.forEach(button => button.addEventListener('click', () => {
    if(button.id ==='equal'){
        display1.textContent = operate(expression[1]) 
        showDisplay2(button)
    };
    if(!isNaN(button.id) || button.id === '.'){
        lastNumber = Number(button.id)
        if (expression.length===1){expression.push('+')}
        if (expression[2]===undefined){expression.push(button.id)}
        else (expression[2] += button.id) 
        showDisplay2(button)
        console.log(expression)
    };
    if(isNaN(button.id) & button.id != 'equal' & button.id != '.'){
        display1.textContent = operate(expression[1])
        lastOperator = button.id
        expression.push(button.id)
        showDisplay2(button)
    };
    if (button.id === 'clearAll'){
        clearAll()
    };
    lowerCaseDisplay1();
}));


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
    return Number(firstValue.toFixed(6))
};


function clearAll(){
    display1.textContent = 0 
    display2.textContent = 0 
    firstValue = 0
    expression = [firstValue]
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

