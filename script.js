function randomNumberGenerator(num) {
  let x = Math.random();
  x = x * num;
  x = Math.floor(x);
  return x;
}

function colorCodeGenerator() {
  let s = "0123456789ABCDEF";
  let colorArray = s.split("");
  let colorCode = "#";
  for (let i = 0; i < 6; i++) {
    colorCode += colorArray[randomNumberGenerator(16)];
  }
  return colorCode;
}

function show() {
  let time = Math.random();
  time = time * 1000;
  setTimeout(function () {
    document.getElementById("shape").style.display = "block";
    displayTime = Date.now();
  }, time);
}

var reactionTime,
  clickTime,
  displayTime,
  count = 0,
  averageReactionTime = 0;
show();
displayTime = Date.now();

document.getElementById("shape").onclick = function () {
  clickTime = Date.now();
  reactionTime = clickTime - displayTime;
  averageReactionTime =
    (reactionTime + averageReactionTime * count) / (count + 1);
  count++;
  document.getElementById("time").innerHTML = reactionTime / 1000;
  document.getElementById("avgTime").innerHTML = averageReactionTime / 1000;
  this.style.display = "none";
  this.style.borderRadius = randomNumberGenerator(100) + "%";
  this.style.backgroundColor = colorCodeGenerator();
  this.style.top = randomNumberGenerator(80) + "%";
  this.style.left = randomNumberGenerator(80) + "%";
  show();
};
