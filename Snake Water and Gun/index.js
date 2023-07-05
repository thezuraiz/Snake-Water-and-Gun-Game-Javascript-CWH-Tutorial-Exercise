const randomChar = () => {
  const characters = "GSW";
  const randomCharacter =
    characters[Math.floor(Math.random() * characters.length)];
  return randomCharacter;
};
let flag = true,
  counter = 0,
  gameCounter = 0,
  computerScore = 0;
while (flag) {
  gameCounter++;
  document.write(` Computer Guess is ${randomChar()} ||`);
  let player = prompt("Enter Your Option \n W G S");
  if (randomChar() == player) {
    alert("You Win");
    counter++;
  } else {
    alert(`Wrong Guess..! Computer Play : ${randomChar()}`);
    computerScore++;
  }
  flag = confirm("Do You Want to play again..?");
}

if (computerScore > counter) {
  alert(
    `You Loss \nYour Score is : ${counter}\nTotal Attempt is : ${gameCounter}`
  );
} else if (computerScore == counter) {
  alert(`Tie \nYour Score is : ${counter}\nTotal Attempt is : ${gameCounter}`);
} else {
  alert(
    `You Won \nYour Score is : ${counter}\nTotal Attempt is : ${gameCounter}`
  );
}
