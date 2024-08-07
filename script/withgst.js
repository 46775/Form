// script.js

// Function to get the serial number from local storage
function getSerialNumber() {
    // Retrieve the serial number from local storage
    let serialNumber = localStorage.getItem('serialNumber');
    
    // If no serial number is found, initialize it to 1
    if (serialNumber === null) {
        serialNumber = 1;
    } else {
        serialNumber = parseInt(serialNumber, 10);
        
        // Increment the serial number, but cap it at 100000
        if (serialNumber < 100000) {
            serialNumber++;
        }
    }
    
    // Update the serial number in local storage
    localStorage.setItem('serialNumber', serialNumber);
    
    return serialNumber;
}

// Function to format the serial number to six digits
function formatSerialNumber(number) {
    // Convert number to a string and pad with leading zeros to ensure it has six digits
    return number.toString().padStart(6, '0');
}

// Function to display the serial number in the HTML
function displaySerialNumber() {
    // Get the serial number
    const serialNumber = getSerialNumber();
    
    // Format the serial number to six digits
    const formattedNumber = formatSerialNumber(serialNumber);
    
    // Display the serial number in the HTML
    document.getElementById('serial-number').textContent = 'Serial Number: ' + formattedNumber;
}

// Execute the function to display the serial number when the page loads
displaySerialNumber();


function printForm1() {
    const formContent = document.getElementById('form1').innerHTML;
    const printWindow = window.open('', '', 'height=800,width=800');
    printWindow.document.write('<html><head><title>Form 1</title>');
    printWindow.document.write('</head><body >');
    printWindow.document.write(formContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  }

  function printForm2() {
    const formContent = document.getElementById('form2').innerHTML;
    const printWindow = window.open('', '', 'height=800,width=800');
    printWindow.document.write('<html><head><title>Form 2</title>');
    printWindow.document.write('</head><body >');
    printWindow.document.write(formContent);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  }