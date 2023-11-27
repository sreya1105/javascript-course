function button(selector){
  const button = document.querySelector(selector);
  if(!button.classList.contains('is-toggled')){
    onOffButton();
  button.classList.add('is-toggled');
}else{
  button.classList.remove('is-toggled');  
}
function onOffButton(){
  const previousButton = document.querySelector('.is-toggled');
  if(previousButton){
    previousButton.classList.remove('is-toggled');
  }
}
}