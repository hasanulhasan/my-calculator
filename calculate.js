document.getElementById('1').addEventListener('click', function(){
  console.log('one clicked');
  const pram1 = 1;
})
document.getElementById('2').addEventListener('click', function(){
  console.log('two clicked');
  var pram2 = 2;
})

document.getElementById('plus').addEventListener('click', function(){
  console.log('plus clicked');
  var pram = 2;
})

function add(pram1 , pram2){
  return pram1 + pram2;
}
