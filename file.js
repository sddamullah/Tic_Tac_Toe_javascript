let itration = 0;
let turnO = true;
let msgcontainer = document.querySelector(".msg_container");
let msg = document.querySelector(".msg");
let boxes = document.querySelectorAll(".box");
let btn = document.querySelector(".resbtn");
let newgame = document.querySelector(".new_game");
const winpatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
      box.classList.add("green");
      box.classList.remove("red");
    } else {
      box.innerText = "X";
      turnO = true;
      box.classList.add("red");
      box.classList.remove("green");
    }
    box.disabled = true;

    checkpattern();
  });
  const disableboxes = () => {
    for (const box of boxes) {
      box.disabled = true;
    }
  };
  // const disableboxes = () => {
  //     for (const box of boxes) {
  //         box.disabled = true;
  //     }
  // }

  resgame = () => {
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");
  };
  enableboxes = () => {
    for (const box of boxes) {
      box.disabled = false;
      box.innerText = "";
    }
  };
  const showWinner = (winner) => {
    msg.innerText = ` Congratulation, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
  };

  const checkpattern = () => {
    for (let pattern of winpatterns) {
      // console.log(pattern[0], pattern[1], pattern[2]);
      // console.log(boxes[pattern[0]], boxes[pattern[1]]);

      let pos1 = boxes[pattern[0]].innerText;
      let pos2 = boxes[pattern[1]].innerText;
      let pos3 = boxes[pattern[2]].innerText;
      if ((pos1 != "") & (pos2 != "") & (pos3 != "")) {
        if ((pos1 === pos1) & (pos2 === pos3) & (pos3 === pos1)) {
          showWinner(pos1);
        }
      } else {
        if (itration == 9) {
          console.log("no winner");
        } else {
          console.log("process winner");
        }
      }
    }
  };
});
btn.addEventListener("click", resgame);
newgame.addEventListener("click", resgame);
