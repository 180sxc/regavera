function loadGame(){
  let openingScreen = document.getElementById("opening-screen")
  let loadAnimateScreen = document.getElementById("load-animate-screen")
  let loadScreen = document.getElementById("load-screen")
  if(loadAnimateScreen) {
    loadAnimateScreen.style.animation = "hideScreen 2s ease-in-out"
    setTimeout(()=>{
      loadAnimateScreen.style.display = "none";
      loadScreen.style.display = "block";
    },2000)
  }
}
function manageDivs(){
  let newGame = document.getElementById("new-game");
  let information = document.getElementById("information")
  let openingScreen = document.getElementById("opening-screen")
  openingScreen.style.backgroundImage = "url('https://art.ngfiles.com/images/1525000/1525565_baukjespirit_pixel-castle-landscape.png?f1606737195')";
  if (newGame) {
    newGame.addEventListener("click", function(){
      loadGame()
    });
  }
}
document.addEventListener("DOMContentLoaded", manageDivs);
