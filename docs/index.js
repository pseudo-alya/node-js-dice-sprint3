async function rollDice() {
    const diceImage = document.getElementById("diceImage");
    const diceNumberText = document.getElementById("diceNumber");
    const rollButton = document.getElementById("rollButton");

    // Disable the button while rolling
    rollButton.disabled = true;

    // Remove the rolling animation, force reflow, then re-add
    diceImage.classList.remove("dice-roll");
    void diceImage.offsetWidth; // forces a reflow
    setTimeout(() => {
        diceImage.classList.add("dice-roll");
    }, 10);

    // Optional: play dice sound
    const diceSound = new Audio("dice-sound.mp3");
    diceSound.play();

    // Fetch the random dice number from the server
    const response = await fetch('/roll-dice');
    const data = await response.json();
    const diceRoll = data.diceRoll;

    // After animation finishes (~1s), update the dice image & text
    setTimeout(() => {
        diceImage.src = `dice${diceRoll}.png`;
        diceNumberText.textContent = `You rolled: ${diceRoll}`;
        rollButton.disabled = false;
    }, 1000);
}

// Hook the rollDice function to the button click
document.getElementById("rollButton").addEventListener("click", rollDice);
