async function rollDice() {
    const diceImage = document.getElementById("diceImage");
    const diceNumberText = document.getElementById("diceNumber");
    const rollButton = document.getElementById("rollButton");
  
    rollButton.disabled = true;
  
    // Re-trigger dice-roll animation
    diceImage.classList.remove("dice-roll");
    void diceImage.offsetWidth; // Force reflow
    setTimeout(() => {
      diceImage.classList.add("dice-roll");
    }, 10);
  
    // Optional dice sound
    // Make sure dice-sound.mp3 actually exists in docs/ or remove these lines if you don't have it
    const diceSound = new Audio("dice-sound.mp3");
    diceSound.play();
  
    // Fetch the random dice number from the server
    const response = await fetch("/roll-dice"); // <-- route must match your server.js
    const data = await response.json();
    const diceRoll = data.diceRoll;
  
    // After the animation, show the result
    setTimeout(() => {
      diceImage.src = `dice${diceRoll}.png`;      // MUST use backticks `...`
      diceNumberText.textContent = `You rolled: ${diceRoll}`;
      rollButton.disabled = false;
    }, 1000);
  }
  
  document.getElementById("rollButton").addEventListener("click", rollDice);
  