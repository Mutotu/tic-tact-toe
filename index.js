function main() {
  ////state vars

  const bt = document.querySelector(".restart");
  const rows = document.querySelectorAll(".row");
  const winner = document.querySelector(".winner");

  //
  const state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const players = {
    X: "X",
    O: "O",
  };
  let player = players.X;
  let won = false;
  const playerOrder = () => {
    if (player === "X") player = players.O;
    else player = players.X;
  };
  ///

  const refresh = () => {
    bt.addEventListener("click", restartGame);
  };

  const restartGame = () => {
    [...rows].forEach((row) => {
      row.classList.remove("disabled");
    });
    won = false;
    winner.innerHTML = "";
    for (i = 0; i < [...rows].length; i++) {
      [...rows][i].innerHTML = null;
      state[i] = 0;
    }
    bt.style.opacity = 0;
  };

  const declareWinner = () => {
    winner.innerHTML = player + " is winner.....";
    won = true;
  };
  ///////////////

  const disabler = () => {
    [...rows].forEach((row) => {
      row.classList.add("disabled");
    });
  };

  const disableAfterWin = () => {
    if (won) {
      disabler();
      // restartBtn()
      if (won) bt.style.opacity = 1;
    } else {
      let counter = 0;
      for (let i of state) {
        if (i === 0) counter++;
      }
      if (counter < 2) {
        winner.innerHTML = "No winner";
        bt.style.opacity = 1;
        disabler();
        // restartBtn();
      }
    }
  };

  const checkWInner = () => {
    if (
      //rows
      (state[0] === player && state[1] === player && state[2] === player) ||
      (state[3] === player && state[4] === player && state[5] === player) ||
      (state[6] === player && state[7] === player && state[8] === player)
    ) {
      console.log(player, "is winner");
      declareWinner();
      // columns
    } else if (
      (state[0] === player && state[3] === player && state[6] === player) ||
      (state[1] === player && state[4] === player && state[7] === player) ||
      (state[2] === player && state[5] === player && state[8] === player)
    ) {
      console.log(player, "is winner");
      declareWinner();
      //diagonals
    } else if (
      (state[0] === player && state[4] === player && state[8] === player) ||
      (state[2] === player && state[4] === player && state[6] === player) ||
      (state[2] === player && state[5] === player && state[8] === player)
    ) {
      console.log(player, "is winner");
      declareWinner();
    }
  };

  const fillHtml = (e) => {
    e.target.innerText = player;
    state[Number(e.target.id)] = player;
    e.target.classList.add("disabled");
  };

  const action = () => {
    [...rows].forEach((row) =>
      row.addEventListener("click", (e) => {
        playerOrder();
        fillHtml(e);

        checkWInner();
        disableAfterWin();
      })
    );
  };
  refresh();
  action();
}
main();
