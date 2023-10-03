const cells = document.querySelectorAll("input");

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", playerChange); 
}

let X = 0;
function playerChange(remove) {
  if (X % 2 === 0) {
    this.value = "X";
    X++;
    remove.target.removeEventListener("click", playerChange);
  } else {
    this.value = "O";
    X++;
    remove.target.removeEventListener("click", playerChange);
  }

  function isBoardFull() {
    const cells = [a1, a2, a3, b1, b2, b3, c1, c2, c3];
    for (const cell of cells) {
      if (cell.value !== "X" && cell.value !== "O") {
        return false; 
      }
    }
    return true; 
  }

  function detectWinner() {

    if (a1.value === "X" && a2.value === "X" && a3.value === "X" ||
        b1.value === "X" && b2.value === "X" && b3.value === "X" ||
        c1.value === "X" && c2.value === "X" && c3.value === "X" ||
        a1.value === "X" && b1.value === "X" && c1.value === "X" ||
        a2.value === "X" && b2.value === "X" && c2.value === "X" ||
        a3.value === "X" && b3.value === "X" && c3.value === "X" ||
        a1.value === "X" && b2.value === "X" && c3.value === "X" ||
        a3.value === "X" && c1.value === "X" && b2.value === "X") {
        alert("Player X has won!");
        location.reload()
    }else if(
        a1.value === "O" && a2.value === "O" && a3.value === "O" ||
        b1.value === "O" && b2.value === "O" && b3.value === "O" ||
        c1.value === "O" && c2.value === "O" && c3.value === "O" ||
        a1.value === "O" && b1.value === "O" && c1.value === "O" ||
        a2.value === "O" && b2.value === "O" && c2.value === "O" ||
        a3.value === "O" && b3.value === "O" && c3.value === "O" ||
        a1.value === "O" && b2.value === "O" && c3.value === "O" ||
        a3.value === "O" && c1.value === "O" && b2.value === "O") {
        alert("Player O has won!");
        location.reload()
    }

  }
  detectWinner();
  
  if (isBoardFull() && !detectWinner()) {
    alert("Das Spiel ist unentschieden!");
    location.reload();
  }

}
