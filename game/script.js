const mario = document.getElementById("mario");
const bullet = document.getElementById("bullet");

document.addEventListener("keydown", function(event) {
  jump();
});

function jump() {
  if (mario.classList != "jump") {
    mario.classList.add("jump")
  }
  setTimeout(function() {
    mario.classList.remove("jump")
  }, 300)
}

let isAlive = setInterval (function() {
  let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"));
  let bulletLeft = parseInt(window.getComputedStyle(bullet).getPropertyValue("left"));

  if (bulletLeft < 180 && bulletLeft > 130 && marioTop >= 80) {
    alert("GAME OVER!!!")
  }
}, 10)