function tic_tac_toe() {
  window.location = "tic_tac_toe.html";
}
function Dinosaur_game_image() {
  window.location = "dinosaur_game.html";
}
function Rock_paper_scissors() {
  window.location = "rock_paper_scissors.html";
}
inst_display = false;
function instruction() {
  if (inst_display == false) {
    document.getElementById("instruction-text").innerHTML =
      "If you want to play any of the games then click on the picture for the game";
    inst_display = true;
  } else {
    document.getElementById("instruction-text").innerHTML = ""
    inst_display = false
  }
}
