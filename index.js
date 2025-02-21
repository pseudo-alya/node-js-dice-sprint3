function rollDice() {
    const diceImage = document.getElementById("diceImage");
    const diceNumberText = document.getElementById("diceNumber");
    const rollButton = document.getElementById("rollButton");

    // Disable button to prevent rapid clicks during the roll
    rollButton.disabled = true;

    // Remove existing animation class before re-adding it
    diceImage.classList.remove("dice-roll");

    // Force reflow (ensures animation restarts properly)
    void diceImage.offsetWidth;

    // Use setTimeout to ensure proper re-triggering
    setTimeout(() => {
        diceImage.classList.add("dice-roll");
    }, 10); // Small delay ensures animation applies

    // Play dice roll sound
    const diceSound = new Audio("dice-sound.mp3");
    diceSound.play();

    // Wait for animation to finish before updating the dice
    setTimeout(() => {
        const diceRoll = Math.floor(Math.random() * 6) + 1;
        diceImage.src = `dice${diceRoll}.png`;
        diceNumberText.textContent = `You rolled: ${diceRoll}`;

        // Re-enable the roll button
        rollButton.disabled = false;
    }, 1000); // 1s matches the animation duration
}

// Use event listener instead of inline onclick
document.getElementById("rollButton").addEventListener("click", rollDice);
