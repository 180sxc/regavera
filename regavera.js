function a() {
  console.log(1);
}

document.addEventListener("DOMContentLoaded", function() {
  let button = document.getElementById("new-game");
  if (button) {
    button.addEventListener("click", a);
  }
});
