function getId(e){
  return document.getElementById(e)
}
function getClass(e){
  return docuement.getElementByClassName(e)
}
var newGame = getId("new-game")
var openingScreen = getId("opening-screen")
newGame.onclick = () => {
  newGame.innerHTML = "works"
}
