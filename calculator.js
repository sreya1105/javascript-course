
let calculation = localStorage.getItem('calculation') || '';
calculationDisplay();
function updateCalculation(value){
    calculationDisplay();
    calculation += value;
    localStorage.setItem('calculation', calculation);
    calculationDisplay();
    console.log(calculation);
}
function calculationDisplay(){
  document.querySelector('.calculation').innerHTML =calculation;
}