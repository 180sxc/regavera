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
  let settings = document.getElementById("settings")
  openingScreen.style.backgroundImage = "url('https://art.ngfiles.com/images/1525000/1525565_baukjespirit_pixel-castle-landscape.png?f1606737195')";
  if(settings) {
    setTimeout(()=>{
      settings.style.display = "block"
    },1500)
  }
  if(information){
    setTimeout(()=>{
      information.style.display = "block"
    },1000)
  }
  if (newGame) {
    setTimeout(()=>{
      newGame.style.display = "block"
    },500)
    newGame.addEventListener("click", function(){
      loadGame()
    });
  }
}
document.addEventListener("DOMContentLoaded", manageDivs);
