const express = require("express");
const path = require("path");

const app = express();

// Serve all files in the "docs" folder
app.use(express.static(path.join(__dirname, "docs")));

// Endpoint for rolling the dice
app.get("/roll-dice", (req, res) => {
  const diceRoll = Math.floor(Math.random() * 6) + 1;
  res.json({ diceRoll });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
