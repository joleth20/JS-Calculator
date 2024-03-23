
const display = document.querySelector('#display');

function joleth(e){
   display.value += e;
}

function calculate(){
   display.value = eval(display.value);
}

function clearDisplay(){
   display.value = '';
}