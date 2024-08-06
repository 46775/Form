const express = require('express');
const app = express();
const port = 3000;

let currentSerialNumber = 1; // Start from 1

app.use(express.static('public')); // Serve static files from the 'public' directory

app.get('/serial', (req, res) => {
    res.json({ serial: currentSerialNumber });
    currentSerialNumber++; // Increment serial number
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});