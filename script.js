//calculator variables
let prevInput ='0';
let calculationOperator ='';
let currentInput = '0';
const calculatorScreen = document.querySelector('.calculator-screen'); 


const inputNumber = (number)=>{
    if(currentInput==='0'){
        currentInput=number;
    } else {
        currentInput+=number;
    }
    
}
const updateScreen = (number)=>{
    calculatorScreen.value = number;

}

const inputOperator = (operator) => {
    prevInput = currentInput;
    calculationOperator = operator;
    currentInput = '0';
}


const numbers = document.querySelectorAll(".number");


numbers.forEach((number) => {
    number.addEventListener("click",(event)=>{
        inputNumber(event.target.value);
        updateScreen(currentInput);
        console.log(number);
    })
})



const operators=document.querySelectorAll(".operator"); 

operators.forEach((operator)=>{
        operator.addEventListener("click",(event) => {
        inputOperator(event.target.value);
        console.log(calculationOperator);
        })
           
    })

 const equalSign = document.querySelector('.equal-sign');
 equalSign.addEventListener('click',()=>{
     console.log('equal button is pressed');
     calculate();
     updateScreen(currentInput);
 })
 
  const calculate = () => {
     let result = 0;
     switch(calculationOperator) 
     {
    
         case '+':
             result=parseInt(prevInput) + parseInt(currentInput);
             break;
         case '-':
            result=parseInt(prevInput) - parseInt(currentInput);
             break;
         case '*':
            result=parseInt(prevInput) * parseInt(currentInput);
             break;
         case '/':
            result=parseInt(prevInput) / parseInt(currentInput);
             break;
        default:

            return;
    }
    currentInput=result.toString();
    calculationOperator='';

    } 
    const clearBtn = document.querySelector('.all-clear');

    clearBtn.addEventListener('click',()=>{
        console.log('ac pressed');
        clearAll();
        updateScreen(currentInput);
    })

const clearAll=()=>{
    prevInput = '0';
    calculationOperator='';
    currentInput='0';
}