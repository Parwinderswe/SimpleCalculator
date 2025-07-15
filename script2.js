const inputVal=document.getElementById("inputValue")
const result = document.getElementById("result")
function calculate(){
    const expression = inputVal.value;
try {
    if (!expression.trim()) {
            result.innerText = "Please enter an expression";
            return;
        }
        const FinalResult = eval(expression);
        result.innerText = `Result: ${FinalResult}`;
    
} catch (error) {
    result.innerText = "Invalid expression";
}
    
}