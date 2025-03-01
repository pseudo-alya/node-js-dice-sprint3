const express = require('express');
const path = require('path');

const app = express();

// Serve static files (HTML, CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint for rolling the dice
app.get('/roll-dice', (req, res) => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    res.json({ diceRoll });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

});
