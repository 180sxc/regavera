
let opening= {
  "new-game": document.getElementById("new-game"),
  "information": document.getElementById("information"),
  "opening-screen": document.getElemenrById("opening-screen")
}
function manageButtonClicks () {
  opening["new-game"].onclick = function(){
    opening["opening-screen"].style.display = "none"
  }
}
