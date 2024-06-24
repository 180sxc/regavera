function getId(e){
  return document.getElementById(e)
}
function getClass(e){
  return docuement.getElementsByClassName(e)
}
var newGame = getId("new-game")
var openingScreen = getId("opening-screen")
function manageGameButtons () {
  //opening buttons
  if(newGame) {
    newGame.onclick = function(){
      if(openingScreen) openingScreen.style.display = 'none'
    }
  }
}
