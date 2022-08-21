
document.getElementById('calculator').addEventListener('click', function(event){
  let btnValue = event.target.innerText;
  let displayValue = document.getElementById('diplay');
    if(btnValue == 'C'){
      displayValue.innerText = '';
    }
    else if(btnValue === '='){
      displayValue.innerText = eval(displayValue.innerText);
    }
    else{
        const typeNewNumber = displayValue.innerText + btnValue;
        displayValue.innerText = typeNewNumber;
    }
})