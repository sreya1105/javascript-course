function costHandling(event){
  if(event.key === 'Enter'){
  Calculate();
}
}
const inputElement = document.querySelector('.js-CostOfCart');
function Calculate(value){
  const inputElement = document.querySelector('.js-CostOfCart');
  let cost =Number(inputElement.value) ;
  document.querySelector('.js-Error').innerHTML='';
  if(cost<=0){
    document.querySelector('.js-Error').innerHTML='Error: Value cant be less than $0';
  }
  if(cost< 40 && cost>0){
    cost = cost+10;
  } 
  if(cost>0){
    document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
  }
}