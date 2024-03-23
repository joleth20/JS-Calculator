
   const display = document.querySelector('#display');
   console.log(display); // Check if display element is selected
 
   function joleth(input){ 
     display.value += input;
   }
 
   function calCulate(){
     try {
       display.value = eval(display.value);
     } catch (error) {
       display.value = "Error in calculation";
     }
   }
 
   function clearDisplay(){
     display.value = '';
   }
 
