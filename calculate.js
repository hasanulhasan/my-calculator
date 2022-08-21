let fromDisplay = document.getElementById('diplay');
document.getElementById('calculator').addEventListener('click', function(event){
  let btnValue = event.target.innerText;
  let displayValue = document.getElementById('diplay');
  if(isNaN(btnValue)){
    if(btnValue == 'C'){
      displayValue.innerText = '';
    }
  }
  else{
   const typeNewNumber =  btnValue + displayValue.innerText;
   displayValue.innerText = typeNewNumber;
  }
})

document.getElementById('calculator').addEventListener('click', function(event){
  let btnPlus = event.target.innerText;
  if(btnPlus == '+'){
    let add1value = fromDisplay.innerText;
    
    let sum = add1value + add2value;
  }
})




document.getElementById('calculator').addEventListener('click', function(event){
  let btnEqual = event.target.innerText;
  if(btnEqual == '='){
    console.log(eval(fromDisplay.innerText));
  }
})