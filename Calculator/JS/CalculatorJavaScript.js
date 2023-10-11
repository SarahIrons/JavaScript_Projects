
//creates an object to keep track of values
const Calculator = {
    //this will display 0 on the screen
    Display_Value:'0',
    //this will hold the 1st operand for any expresssions; we set it to nul for nowl
    First_Operand: null,
    //this checks whether or not the 2nd operand has been inputted by user.
    Wait_Second_Operand: false,
    //this will hold the operator; we set it to null for now.
    operator: null,
};

//this modifies values ea time a button is clicked on.
function InputDigit(digit) {
    const{Display_Value, Wait_Second_Operand } = Calculator; 
    //this checkes if the wait 2nd operand is true, and sets disp value to the key that was clicked on.
    if (Wait_Second_Operand===true) {
        Calculator.Display_Value = digit; 
        Calculator.Wait_Second_Operand = false; 
    } else {
        //this overwrites the disp value if the current value is 0; otherwise it adds onto it.


        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit; 
    }
}

//this section addresses decimal points
function InputDecimal(dot) {
    //this ensures that accidental clicking of the decimal poilnt doesn't cause bugs in the operation. 

    if(Calculator.Wait_Second_Operand===true) return; 
    if(!Calculator.Display_Value.includes(dot)) {
        //we are sayikng that if the disp value does not have a decimial point, we want to add a decimal point.
//
        Calculator.Display_Value += dot; 
    }
}

//this section addresses operators
function HandleOperators(NextOperator) {
    const{First_Operand,Display_Value, operator} = Calculator; 
    //when an operator key is pressed, we convert the current number 
    //displayed on the screen to a number and then store the result in 
    //calculator.1st operand if it does not already exist.
    const ValueOfInput = parseFloat(Display_Value);
    //checks if an operator already exists and if wait 2nd operand is true;
    //then it updates the operator and exits from the function.
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = NextOperator;
        return;
    }
    if(First_Operand==null) {
        Calculator.First_Operand = ValueOfInput;
    } else if (operator) {
        const ValueNow = First_Operand || 0; 
        //if operator exists, property lookup is performed for the operator in the perform calculator object and the function that matches the opertator is executed


        let result= PerformCalculation[operator](ValueNow, ValueOfInput); 
        //here we add a fixed amt of numbers after the decimal.
        result= Number(result).toFixed (9);
        //this will remove any trailing 0's
        result= (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator= NextOperator; 
}
const PerformCalculation = {
    '/':(First_Operand, SecondOperand)=>First_Operand/SecondOperand,
    '*':(First_Operand,SecondOperand)=>First_Operand*SecondOperand,
    '+':(First_Operand, SecondOperand)=>First_Operand+SecondOperand,
    '-':(First_Operand, SecondOperand)=>First_Operand-SecondOperand,
    '=':(SecondOperand)=>SecondOperand
};
function CalculatorReset(){
Calculator.Display_Value = '0';
Calculator.First_Operand=null;
Calculator.Wait_Second_Operand=false;
Calculator.operator=null;
}
//this function updates the calculator screen with the contents of display value 
function UpdateDisplay() {
    //makes use of calculator screen clsass to target the input tag in the HTML document
    //
    const display=document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

UpdateDisplay();
//this section monitors button clicks
const keys= document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) =>{
  
    //the target variable is an object that represents the element
    //that was clicked.
    const { target }= event;
    //if the element that was clicked on is not a button, exit the function.
    if(!target.matches('button')) {
        return
    }
    if(target.classList.contains('operator')){
        HandleOperators(target.value);
        UpdateDisplay();
        return;
    }
    if(target.classList.contains('decimal')) {
        InputDecimal(target.value);
        UpdateDisplay();
        return;
    }
    //ensures that AC clears all inputs from the calculator screen.
    if (target.classList.contains('all-clear')) {
        CalculatorReset();
        UpdateDisplay();
        return;
    }
    InputDigit(target.value);
    UpdateDisplay();
})