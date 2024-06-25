function loadGame(){
  let openingScreen = document.getElementById("opening-screen")
  let loadAnimateScreen = document.getElementById("load-animate-screen")
  if(loadAnimateScreen) {
    loadAnimateScreen.style.animation = "hideScreen 2s ease-in-out"
    setTimeout(()=>{
      loadAnimateScreen.style.display = "none"
    },4000)
  }
}
function manageDivs(){
  let newGame = document.getElementById("new-game");
  let information = document.getElementById("information")
  let openingScreen = document.getElementById("opening-screen")
  openingScreen.style.backgroundImage = "url('https://i.pinimg.com/originals/08/f2/13/08f213d67bd2069184aa90dca44c720e.jpg')";
  if (newGame) {
    newGame.addEventListener("click", function(){
      loadGame()
    });
  }
}
document.addEventListener("DOMContentLoaded", manageDivs);
