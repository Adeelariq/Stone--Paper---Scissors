let userscore = 0;
let computerscore = 0;

const choice = document.querySelectorAll(".option");
const userscore_span = document.querySelector(".player");
const computerscore_span = document.querySelector(".computer");
const mychoice = document.querySelector(".playechoice");
const machinechoice = document.querySelector(".computerchoice");

function compchoice() {
  const choiceava = ["rock", "paper", "scissors"];
  const randomnumber = Math.floor(Math.random() * 3);
  return choiceava[randomnumber];
}

const winnercheck = (userwin,) => {
  if (userwin === true) {
    userscore++;
    userscore_span.textContent = userscore ;
    let result = document.querySelector(".winnerresult");
    result.textContent = "User Wins";
  } else if (userwin === false) {
    computerscore++;
    computerscore_span.textContent = computerscore;
    let result = document.querySelector(".winnerresult");
    result.textContent = "Computer Wins";
    result.style.color = "blue";
  }
};

function game(userchoice) {
  
    mychoice.textContent = "User chose " + userchoice;


  const computer = compchoice();
  
    machinechoice.textContent = "Computer chose " + computer;


  if (userchoice.toLowerCase() === computer.toLowerCase()) {
    const result = document.querySelector(".winnerresult");
    result.textContent = "It's a tie";
    return;
  }

  let userwin = false; //
  if (
    userchoice.toLowerCase() === "rock" &&
    computer.toLowerCase() === "scissors"
  ) {
    userwin = true;
  } else if (
    userchoice.toLowerCase() === "scissors" &&
    computer.toLowerCase() === "rock"
  ) {
    userwin = false;
  } else if (
    userchoice.toLowerCase() === "paper" &&
    computer.toLowerCase() === "rock"
  ) {
    userwin = true;
  } else if (
    userchoice.toLowerCase() === "rock" &&
    computer.toLowerCase() === "paper"
  ) {
    userwin = false;
  } else if (
    userchoice.toLowerCase() === "scissors" &&
    computer.toLowerCase() === "paper"
  ) {
    userwin = true;
  } else if (
    userchoice.toLowerCase() === "paper" &&
    computer.toLowerCase() === "scissors"
  ) {
    userwin = false;
  }

  winnercheck(userwin);
}

choice.forEach((option) => {
  option.addEventListener("click", () => {
    let userchoice = option.getAttribute("id");
    game(userchoice);
  });
});
