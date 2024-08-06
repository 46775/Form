 const serialInput = document.getElementById('serialInput');

 function updateSerialNumber() {
     let currentNumber = parseInt(serialInput.value, 10);

     if (!isNaN(currentNumber)) {
         serialInput.value = currentNumber + 1;
     }
 }

 serialInput.addEventListener('change', updateSerialNumber);

 serialInput.value = 1; 