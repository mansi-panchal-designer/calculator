const buttonEl = document.querySelectorAll('button');
const inputEl = document.getElementById('result');

for(let i = 0; i<buttonEl.length;i++){
    buttonEl[i].addEventListener('click', () => {
        const buttonVal = buttonEl[i].textContent;
        if(buttonVal === "C"){
            clearResult()
        }else if(buttonVal === "="){
            calculateResult()
        }else{
            appendVal(buttonVal)
        }
    })
}
function clearResult(){
    inputEl.value = "";
}
function calculateResult(){
    inputEl.value = eval(inputEl.value)
}
function appendVal(buttonVal){
    inputEl.value += buttonVal;
}