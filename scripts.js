const display1 = document.getElementById('display1')
const display2 = document.getElementById('display2')
const buttons = document.querySelectorAll('button')
let firstValue = 0
let expression = ['']

buttons.forEach(button => button.addEventListener('click', () => {
    button.classList.add('transition')
    if (firstValue === 'You can\'t divide by zero'){clearAll()}
    if(button.id ==='equal'){
        expression.push(lastOperator)


      

    };
    if(!isNaN(button.id) || button.id === '.'){
        lastNumber = Number(button.id)
        if(expression[0] === undefined){expression[0] = button.id}
        else (expression[0] += button.id)
        console.log(expression)


    };
    if(isNaN(button.id) & button.id != 'equal' & button.id != '.'){
        if(expression.length === 2){display1.textContent = operate ()}
        lastOperator = button.id
        expression.push(button.id)
        console.log(expression)
        
        

    };
    if(expression.length === 2){display1.textContent = operate ()}
    console.log(expression)
    
    if (button.id === 'clearAll'){
        clearAll()
    };
    lowerCaseDisplay1();
}));

buttons.forEach(button => button.addEventListener('transitionend', removeTransition))

function operate(){
    if(!isNaN(expression[1])){expression.reverse()}
    if(expression[0] === '+' & expression[1] === '+'){firstValue += lastNumber}
    else if (expression[0] === '-' & expression[1] ==='+' || expression[0] === '+' & expression[1] ==='-' ){firstValue = firstValue*(-1)}
    else if (expression[0] === '-' & expression[1] === '-'){firstValue -= lastNumber}
    else{
        switch(expression[1]) {
            case '+':
                firstValue += Number(expression[0])
                break;
            case '-':
                firstValue -= Number(expression[0])

                break;
            case '/':

                break;
            case '*':

                break;
        }
    }

    if(expression.length===2){expression = ['']}
    return firstValue 
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

function removeTransition(e){
    if(e.propertyName === 'transform'){
        e.target.classList.remove('transition')
    }
}