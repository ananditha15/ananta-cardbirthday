let musicStarted = false;

function startMusic() {
  if (!musicStarted) {
    document.getElementById("bgm").play();
    musicStarted = true;
  }
}

function openHeart() {
  document.getElementById("footer").style.display = "block";
}