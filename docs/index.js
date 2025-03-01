async function rollDice() {
    const diceImage = document.getElementById("diceImage");
    const diceNumberText = document.getElementById("diceNumber");
    const rollButton = document.getElementById("rollButton");

    rollButton.disabled = true;
    diceImage.classList.remove("dice-roll");

    // Force reflow to restart animation
    void diceImage.offsetWidth;

    setTimeout(() => {
        diceImage.classList.add("dice-roll");
    }, 10);

    const diceSound = new Audio("dice-sound.mp3");
    diceSound.currentTime = 0; // Restart the sound
    diceSound.play();

    try {
        const response = await fetch('/roll-dice');
        const data = await response.json();
        const diceRoll = data.diceRoll;

        setTimeout(() => {
            diceImage.src = `dice${diceRoll}.png`;
            diceNumberText.textContent = `You rolled: ${diceRoll}`;
            rollButton.disabled = false;
        }, 1000);
    } catch (error) {
        console.error("Error rolling dice:", error);
        rollButton.disabled = false;
    }
}

document.getElementById("rollButton").addEventListener("click", rollDice);
