function play(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("user-choice").textContent = `Your choice: ${userChoice}`;
  document.getElementById("computer-choice").textContent = `Computer's choice: ${computerChoice}`;

  let result = "";

  if (userChoice === computerChoice) {
    result = "It's a draw!, Try again";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "Congrats, You win! 🎉";
  } else {
    result = "Oops, You lose! 😢";
  }

  document.getElementById("winner").textContent = result;
}