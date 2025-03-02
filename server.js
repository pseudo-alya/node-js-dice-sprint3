// server.js
const express = require('express');
const path = require('path');

const app = express();

// Serve the static front-end files from the "docs" directory
app.use(express.static(path.join(__dirname, 'docs')));

// API endpoint for rolling the dice
app.get('/roll-dice', (req, res) => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    res.json({ diceRoll });
});

// Azure will set process.env.PORT. Fallback to 3000 locally.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
