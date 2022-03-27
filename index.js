// function main() {
//   ////state vars

//   const bt = document.querySelector(".restart");
//   const rows = document.querySelectorAll(".row");
//   const winner = document.querySelector(".winner");
//   const trackingTurns = document.querySelector(".tracking");

//   //
//   const state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
//   const players = {
//     X: "X",
//     O: "O",
//   };
//   let pair = {
//     person: players.X,
//     computer: players.O,
//   };
//   let onPlay = true;
//   let player = null;
//   let won = false;
//   const playerOrder = () => {
//     if (player === "X") player = players.O;
//     else player = players.X;
//   };
//   ///
//   ///auto play
//   const auto = () => {
//     if (!onPlay) {
//       for (let i = 0; i < state.length; i++) {
//         if (state[i] === 0) {
//           state[i] = "O";
//           onPlay = true;
//           break;
//         }
//       }
//     }
//   };

//   const refresh = () => {
//     bt.addEventListener("click", restartGame);
//   };

//   const restartGame = () => {
//     [...rows].forEach((row) => {
//       row.classList.remove("disabled");
//     });
//     won = false;
//     winner.innerHTML = "";
//     for (i = 0; i < [...rows].length; i++) {
//       [...rows][i].innerHTML = null;
//       state[i] = 0;
//     }
//     bt.style.opacity = 0;
//   };

//   const declareWinner = () => {
//     winner.innerHTML = player + " is winner.....";
//     won = true;
//   };
//   ///////////////

//   const disabler = () => {
//     [...rows].forEach((row) => {
//       row.classList.add("disabled");
//     });
//   };

//   const disableAfterWin = () => {
//     if (won) {
//       disabler();

//       if (won) bt.style.opacity = 1;
//     } else {
//       let counter = 0;
//       for (let i of state) {
//         if (i === 0) counter++;
//       }
//       if (counter < 2) {
//         winner.innerHTML = "No winner";
//         bt.style.opacity = 1;
//         disabler();
//       }
//     }
//   };

//   const checkWInner = () => {
//     if (
//       //rows
//       (state[0] === player && state[1] === player && state[2] === player) ||
//       (state[3] === player && state[4] === player && state[5] === player) ||
//       (state[6] === player && state[7] === player && state[8] === player)
//     ) {
//       declareWinner();
//       // columns
//     } else if (
//       (state[0] === player && state[3] === player && state[6] === player) ||
//       (state[1] === player && state[4] === player && state[7] === player) ||
//       (state[2] === player && state[5] === player && state[8] === player)
//     ) {
//       declareWinner();
//       //diagonals
//     } else if (
//       (state[0] === player && state[4] === player && state[8] === player) ||
//       (state[2] === player && state[4] === player && state[6] === player) ||
//       (state[2] === player && state[5] === player && state[8] === player)
//     ) {
//       declareWinner();
//     }
//   };

//   const fillHtml = (e) => {
//     e.target.innerText = player;
//     state[Number(e.target.id)] = player;
//     e.target.classList.add("disabled");
//     trackingTurns.innerHTML = `${player === "X" ? "O" : "X"}'s turn`;
//   };

//   const action = () => {
//     trackingTurns.innerHTML = `${players.X}'s turn`;
//     [...rows].forEach((row) =>
//       row.addEventListener("click", (e) => {
//         onPlay = false;
//         auto();
//         playerOrder();
//         fillHtml(e);

//         checkWInner();
//         disableAfterWin();
//       })
//     );
//   };
//   refresh();
//   action();
// }
// main();
//////////////////////
/////////////////////
///Automated

function main() {
  ////state vars

  const bt = document.querySelector(".restart");
  const rows = document.querySelectorAll(".row");
  const winner = document.querySelector(".winner");
  const trackingTurns = document.querySelector(".tracking");

  //
  const state = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const players = {
    X: "X",
    O: "O",
  };

  let onPlay = false;
  let player = null;
  let won = false;
  const playerOrder = () => {
    if (player === "X") player = players.O;
    else player = players.X;
  };
  ///
  ///auto play
  let temp = [];
  const auto = () => {
    for (let i = 0; i < state.length; i++) {
      if (state[i] === 0) {
        temp.push(i);
      }

      // break;
    }
    if (onPlay) {
      onPlay = true;
      let random = Math.floor(Math.random() * temp.length);

      [...rows][random].innerHTML = "O";
      state[random] = "O";
      trackingTurns.innerHTML = "O's turn";
    }
    temp = [];
    onPlay = false;
    checkWInner();
  };

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
      declareWinner();
      // columns
    } else if (
      (state[0] === player && state[3] === player && state[6] === player) ||
      (state[1] === player && state[4] === player && state[7] === player) ||
      (state[2] === player && state[5] === player && state[8] === player)
    ) {
      declareWinner();
      //diagonals
    } else if (
      (state[0] === player && state[4] === player && state[8] === player) ||
      (state[2] === player && state[4] === player && state[6] === player) ||
      (state[2] === player && state[5] === player && state[8] === player)
    ) {
      declareWinner();
    }
    timer();
  };
  const timer = () => {
    setTimeout(() => auto(), 800);
  };
  const fillHtml = (e) => {
    e.target.innerText = "X";
    state[Number(e.target.id)] = "X";
    e.target.classList.add("disabled");
  };

  const action = () => {
    //

    trackingTurns.innerHTML = `${players.X}'s turn`;
    [...rows].forEach((row) =>
      row.addEventListener("click", (e) => {
        playerOrder();
        fillHtml(e);
        onPlay = true;
        checkWInner();
        disableAfterWin();
      })
    );
  };

  refresh();
  action();
}
main();
