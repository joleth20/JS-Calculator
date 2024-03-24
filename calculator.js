const display = document.querySelector('#display')

// Display
const joleth = (input) => {
    display.value += input
}

// Calculate
const calCulate = () => {
   try{
    display.value = eval(display.value)
   }catch(error){
    display.value = "Error Calculation"
   }
}

// ClearDisplay
const clearDisplay = () => {
  display.value = "";
}