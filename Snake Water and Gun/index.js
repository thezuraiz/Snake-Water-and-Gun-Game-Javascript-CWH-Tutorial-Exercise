const randomChar = () => {
  const characters = "GSW";
  const randomCharacter =
    characters[Math.floor(Math.random() * characters.length)];
  return randomCharacter;
};

const match = (cpu) => {
  let player = prompt("Enter Your Option \n W G S");
  
  if (cpu == "W" && player == "S") {
    alert(`You Lost  Computer Play: ${randomChar()}`);
    computerScore++
  }
  else if (cpu == "W" && player == "G") {
    alert(`You Lost  Computer Play: ${randomChar()}`);
    computerScore++
  }
  else if (cpu == "G" && player == "W") {
    counter++
    alert(`You Won..! Your Score ${counter}`);
  }
  else if (cpu == "G" && player == "S") {
    alert(`You Lost  Computer Play: ${randomChar()}`);
    computerScore++
  }
  else if (cpu == "S" && player == "W") {
    alert(`You Lost  Computer Play: ${randomChar()}`);
    computerScore++
  }
  else if (cpu == "S" && player == "G") {
    counter++
    alert(`You Won..! Your Score ${counter}`);
  }
  else {
    alert("Tie..!")
  }
}

let flag = true,
  counter = 0,
  gameCounter = 0,
  computerScore = 0;
while (flag) {
  gameCounter++;
  document.write(` Computer Guess is ${randomChar()} ||`);
  
  match(randomChar());
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
