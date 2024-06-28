let config = {
  maxScreenHeight: 1080,
  maxScreenWidth: 1920,
  items: [],
  weapons: [],
  accessories: [],
}
let myPlayer = {
  health: 1000,
  maxHealth: 1000,
  x: 0,
  y: 0,
  speed: 5,
  accessories: [],
  inventory: [],
  weapon: [],
  src: "", //for animating the character
}
function updateMovements () {
}
function keyDown (e) {
  let movementKeys = [87, 65, 83, 68];
  let t = e.keyCode
  if(movementKeys.includes(t)) {
    
  }
}
function keyUp (e) {
  let movementKeys = [87, 65, 83, 68];
}
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp)
function updatePlayer () {
}
function update() {//game logic here constantly updated
  
}
function runGame() {
  update()
  requestAnimationFrame(runGame);
}
runGame();
function fadeIn(element) {
  if(element){
    element.style.display = "block";
    element.style.animation = "fadeIn 1s ease-out";
  }
}
function fadeOut(element){
  if (element) {
    element.style.animation = "fadeOut 1s ease-out";
    setTimeout(function(){
      element.style.display = "none"
    }, 900)
  }
}
function setUpGame(){
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
  canvas.style.display = "block";
}
function loadAssets(){
  let loader = document.getElementById("loader")
  let loadScreen = document.getElementById("load-screen")
  let openingScreen = document.getElementById("opening-screen")
  loader.style.display = "block";
  loader.style.animation = "fadeIn 1s ease-out";
  openingScreen.style.display = "none";
  setTimeout(()=>{
    setUpGame()
    fadeOut(loadScreen);
  },3000)
}
function loadGame(){
  let openingScreen = document.getElementById("opening-screen")
  let loadAnimateScreen = document.getElementById("load-animate-screen")
  let loadScreen = document.getElementById("load-screen")
  let openingButtons = document.querySelectorAll('.opening-buttons');
  if(openingButtons){
    openingButtons.forEach(function(buttons){
      buttons.style.animation = "fadeOut 2s ease-out"
    })
  }
  if(loadAnimateScreen) {
    loadAnimateScreen.style.animation = "hideScreen 2s ease-in-out"
    setTimeout(()=>{
      loadAnimateScreen.style.display = "none";
      loadScreen.style.display = "block";
      loadAssets();
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
      settings.style.animation = "fadeIn 1s ease-out"
    },1500)
  }
  if(information){
    setTimeout(()=>{
      information.style.display = "block"
      information.style.animation = "fadeIn 1s ease-out"
    },1000)
  }
  if (newGame) {
    setTimeout(()=>{
      newGame.style.display = "block"
      newGame.style.display = "fadeIn 1s ease-out"
    },500)
    newGame.addEventListener("click", function(){
      loadGame()
    });
  }
}
document.addEventListener("DOMContentLoaded", manageDivs);
