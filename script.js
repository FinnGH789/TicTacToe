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
  let zahl = 0;

  function detectWinner() {

    //Das hier nochmal überarbeiten, weil das ist mist!
    if (
        cells[0].value === "X" && cells[1].value === "X" && cells[2].value === "X" ||
        cells[3].value === "X" && cells[4].value === "X" && cells[5].value === "X" ||
        cells[6].value === "X" && cells[7].value === "X" && cells[8].value === "X" ||
        cells[0].value === "X" && cells[1].value === "X" && cells[2].value === "X" ||
        cells[0].value === "X" && cells[4].value === "X" && cells[8].value === "X" ||
        cells[2].value === "X" && cells[4].value === "X" && cells[6].value === "X" ||
        cells[0].value === "X" && cells[3].value === "X" && cells[6].value === "X" ||
        cells[1].value === "X" && cells[4].value === "X" && cells[7].value === "X" ||
        cells[2].value === "X" && cells[5].value === "X" && cells[8].value === "X"
        ) {
        zahl++;
        alert("Player X has won!");
        location.reload();
    }else if(
        cells[3].value === "O" && cells[4].value === "O" && cells[5].value === "O" ||
        cells[6].value === "O" && cells[7].value === "O" && cells[8].value === "O" ||
        cells[0].value === "O" && cells[1].value === "O" && cells[2].value === "O" ||
        cells[0].value === "O" && cells[1].value === "O" && cells[2].value === "O" ||
        cells[0].value === "O" && cells[4].value === "O" && cells[8].value === "O" ||
        cells[2].value === "O" && cells[4].value === "O" && cells[6].value === "O" ||
        cells[0].value === "O" && cells[3].value === "O" && cells[6].value === "O" ||
        cells[1].value === "O" && cells[4].value === "O" && cells[7].value === "O" ||
        cells[2].value === "O" && cells[5].value === "O" && cells[8].value === "O"
      ) {
        zahl++;
        alert("Player O has won!");
        location.reload();
    }
    
  }

  function draw(){
    if(X === 9 && zahl != 1){
      alert('Unentschieden, versuchen sie es erneut!');
      location.reload();
    }
  }

  detectWinner();
  draw();

}
