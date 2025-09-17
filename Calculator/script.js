// Add number to input 
function addNumberToInput(number){
let inputField = document.getElementById("displayInput");
inputField.value += number; 
}

// Direct using key without clicking input
document.addEventListener('DOMContentLoaded', function() {
    let inputField = document.getElementById('displayInput');
    inputField.focus();
});

// "+", "-", "*", 
const operators = document.querySelectorAll(".operation");
let inputDisplay = document.getElementById("displayInput");
operators.forEach(op => {
  op.addEventListener("click", ()=>{
    inputDisplay.value += op.textContent;
  });
});

//


//"="
const inputField = document.getElementById("displayInput");
function calculate(){
  try{
    inputField.value = eval(inputField.value);
  }catch(error){
    inputField.value = error
  }
}

//"DELETE"
function deleteInput(){
  let inputField = document.getElementById("displayInput")
  inputField.value = inputField.value.slice(0,-1);
}

//AC (all clear)
function allClear(){
   let result =  document.getElementById('displayInput');
   result.value = "";
}


