function manageDivs(){
  let newGame = document.getElementById("new-game");
  let openingScreen = document.getElementById("opening-screen")
  if (newGame) {
    newGame.addEventListener("click", function(){
      openingScreen.style.display = "none"
    });
  }
}
document.addEventListener("DOMContentLoaded", manageDivs);
