<<<<<<< HEAD
alert("Это игра Марио(Совершите максимальное количество прыжков). Пробел - прыжок");

var score = 0

const mario = document.getElementById("mario");
const bullet = document.getElementById("bullet");


function myFunction(){
  score++;
  document.getElementById("score").innerHTML = "Количесво прыжков:" + score;
};

document.addEventListener("keydown", function(event) {
  jump();
  myFunction();
});



function jump() {
  if (mario.classList != "jump") {
    mario.classList.add("jump");
  }
  setTimeout(function() {
    mario.classList.remove("jump")
  }, 500);
};

let isAlive = setInterval (function() {
  let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"));
  let bulletLeft = parseInt(window.getComputedStyle(bullet).getPropertyValue("left"));

  if (bulletLeft < 180 && bulletLeft > 130 && marioTop >= 80) {
    alert("GAME OVER!!!");
    score = 0;
  }
}, 10);
=======
alert("Это игра Марио(Совершите максимальное количество прыжков). Пробел - прыжок");

var score = 0

const mario = document.getElementById("mario");
const bullet = document.getElementById("bullet");


function myFunction(){
  score++;
  document.getElementById("score").innerHTML = "Количесво прыжков:" + score;
};

document.addEventListener("keydown", function(event) {
  jump();
  myFunction();
});



function jump() {
  if (mario.classList != "jump") {
    mario.classList.add("jump");
  }
  setTimeout(function() {
    mario.classList.remove("jump")
  }, 500);
};

let isAlive = setInterval (function() {
  let marioTop = parseInt(window.getComputedStyle(mario).getPropertyValue("top"));
  let bulletLeft = parseInt(window.getComputedStyle(bullet).getPropertyValue("left"));

  if (bulletLeft < 180 && bulletLeft > 130 && marioTop >= 80) {
    alert("GAME OVER!!!");
    score = 0;
  }
}, 10);
>>>>>>> cf5b68501bb64729a80f163dfbf06b7c31585ae6
