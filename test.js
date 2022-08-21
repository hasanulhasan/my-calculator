let fromDisplay = document.getElementById('diplay');

document.getElementById('calculator').addEventListener('click', function(event){
  let btnValue = event.target.innerText;
  let displayValue = document.getElementById('diplay');
    if(btnValue == 'C'){
      displayValue.innerText = '';
    }
    else if(btnValue === '='){
      displayValue.innerText = eval(displayValue.innerText);
    }
    else if(btnValue !== 'C') {
      console.log("not click on C");
        const typeNewNumber =  btnValue + displayValue.innerText;
        displayValue.innerText = typeNewNumber;
    }
    else{
      console.log('kisu korar dorkar nai')
    }
})