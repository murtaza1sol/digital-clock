"use strict";

function resizeClock() {

  var circle = document.querySelectorAll(".clock-shape");
  var clockSize = getComputedStyle(document.documentElement).getPropertyValue(
    "--clockSize"
  );
  var circleSize = "calc(" + clockSize + " / 2)";
  var circleRadius = "calc((" + clockSize + " /2) - 1rem)";


  for (let i = 0; i < circle.length; i++) {
    circle[i].setAttribute("cy", circleSize);
    circle[i].setAttribute("cx", circleSize);

    circle[i].setAttribute("r", circleRadius);
  }
}

clockFun();
function clockFun() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  hour = hour > 12 ? hour - 12 : hour;
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;

  document.documentElement.style.setProperty("--loadingSize", sec);

  const hourTxt = document.querySelector(".hour");
  const minTxt = document.querySelector(".min");

  var colon = document.querySelector(".colon");

  hourTxt.innerHTML = hour;
  minTxt.innerHTML = min;

  if (!colon.classList.contains("sec")) {
    colon.classList.add("sec");
  }

  setInterval(clockFun, 1000);
}
