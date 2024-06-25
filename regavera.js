function loadGame(){
  let openingScreen = document.getElementById("opening-screen")
  if(openingScreen) {
    openingScreen.style.animation = "hideScreen 2s ease-in"
    setTimeout(()=>{
      openingScreen.style.display = "none"
    },2000)
  }
}
function manageDivs(){
  let newGame = document.getElementById("new-game");
  let openingScreen = document.getElementById("opening-screen")
  openingScreen.style.backgroundImage = "url('https://i.pinimg.com/originals/08/f2/13/08f213d67bd2069184aa90dca44c720e.jpg')"
  if (newGame) {
    newGame.addEventListener("click", function(){
      loadGame()
    });
  }
}
document.addEventListener("DOMContentLoaded", manageDivs);
