async function fetchSerialNumber() {
    try {
        const response = await fetch('/serial');
        const data = await response.json();
        const serialInput = document.getElementById('serialInput');
        serialInput.value = data.serial;
    } catch (error) {
        console.error('Error fetching serial number:', error);
    }
}

// Fetch and display the serial number when the page loads
window.onload = fetchSerialNumber;