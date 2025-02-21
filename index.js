function RollDice() {
    let diceRoll = Math.floor(Math.random() * 6) + 1;
    document.getElementById("diceImage").src = `dice${diceRoll}.png`;
    document.getElementById("diceNumber").textContent = `You rolled: ${diceRoll}`;
}
