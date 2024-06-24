function manageDivs(){
  let newGame = document.getElementById("new-game");
  let openingScreen = document.getElementById("opening-screen")
  openingScreen.style.backgroundImage = "url('https://i.pinimg.com/originals/08/f2/13/08f213d67bd2069184aa90dca44c720e.jpg')"
  if (newGame) {
    newGame.addEventListener("click", function(){
      openingScreen.style.display = "none"
    });
  }
}
document.addEventListener("DOMContentLoaded", manageDivs);
