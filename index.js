async function rollDice() {
    const diceImage = document.getElementById("diceImage");
    const diceNumberText = document.getElementById("diceNumber");
    const rollButton = document.getElementById("rollButton");

    rollButton.disabled = true;
    diceImage.classList.remove("dice-roll");
    void diceImage.offsetWidth;

    setTimeout(() => {
        diceImage.classList.add("dice-roll");
    }, 10);

    const diceSound = new Audio("dice-sound.mp3");
    diceSound.play();

    // Fetch the random dice number from the server
    const response = await fetch('/roll-dice');
    const data = await response.json();
    const diceRoll = data.diceRoll;

    setTimeout(() => {
        diceImage.src = `dice${diceRoll}.png`;
        diceNumberText.textContent = `You rolled: ${diceRoll}`;
        rollButton.disabled = false;
    }, 1000);
}

document.getElementById("rollButton").addEventListener("click", rollDice);
