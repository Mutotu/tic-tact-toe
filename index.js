////state vars

const state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const rows = document.querySelectorAll(".row");
const winner = document.querySelector(".winner");
const players = {
  X: "X",
  O: "O",
};
let player = players.X;
let won = false;
function playerOrder() {
  if (player === "X") player = players.O;
  else player = players.X;
}
///
function declareWinner() {
  winner.innerHTML = player + " is winner.....";
  won = true;
}
///////////////
const disableAfterWin = () => {
  if (won) {
    [...rows].forEach((row) => {
      console.log(row);
      row.classList.add("disabled");
    });
  }
};

const checkWInner = () => {
  for (let i = 0; i < state.length; i++) {
    if (
      //rows
      (state[i] === player &&
        state[i + 1] === player &&
        state[i + 2] === player) ||
      (state[i + 3] === player &&
        state[i + 4] === player &&
        state[i + 5] === player) ||
      (state[i + 6] === player &&
        state[i + 7] === player &&
        state[i + 8] === player)
    ) {
      console.log(player, "is winner");
      declareWinner();
      // columns
    } else if (
      (state[i] === player &&
        state[i + 3] === player &&
        state[i + 6] === player) ||
      (state[i + 1] === player &&
        state[i + 4] === player &&
        state[i + 7] === player) ||
      (state[i + 2] === player &&
        state[i + 5] === player &&
        state[i + 8] === player)
    ) {
      console.log(player, "is winner");
      declareWinner();
      //diagonals
    } else if (
      (state[i] === player &&
        state[i + 4] === player &&
        state[i + 8] === player) ||
      (state[i + 2] === player &&
        state[i + 4] === player &&
        state[i + 6] === player) ||
      (state[i + 2] === player &&
        state[i + 5] === player &&
        state[i + 8] === player)
    ) {
      console.log(player, "is winner");
      declareWinner();
    }
  }
};

const action = () => {
  [...rows].forEach((row) =>
    row.addEventListener("click", (e) => {
      playerOrder();
      e.target.innerText = player;

      state[Number(e.target.id)] = player;
      console.log(e.target);
      e.target.classList.add("disabled");

      console.log(state);
      checkWInner();
      disableAfterWin();
    })
  );
};

action();
