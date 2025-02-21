function rollDice() {
    const diceImage = document.getElementById("diceImage");
    const diceNumberText = document.getElementById("diceNumber");
    const rollButton = document.getElementById("rollButton");
  
    // Disable button to prevent rapid clicks during the roll
    rollButton.disabled = true;
  
    // Optional: Play dice roll sound (ensure dice-sound.mp3 is in your directory)
    const diceSound = new Audio("dice-sound.mp3");
    diceSound.play();
  
    // Add animation class to dice image
    diceImage.classList.add("dice-roll");
  
    // Wait for animation to finish before updating the dice
    setTimeout(() => {
      const diceRoll = Math.floor(Math.random() * 6) + 1;
      diceImage.src = `dice${diceRoll}.png`;
      diceNumberText.textContent = `You rolled: ${diceRoll}`;
  
      // Remove animation class to allow re-triggering
      diceImage.classList.remove("dice-roll");
  
      // Re-enable the roll button
      rollButton.disabled = false;
    }, 1000); // 1s matches the animation duration
  }
  
  // Use event listener instead of inline onclick
  document.getElementById("rollButton").addEventListener("click", rollDice);
  
