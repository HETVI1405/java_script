let display = document.getElementById("display");
let timer = null;
let [seconds, minutes, hours] = [0, 0, 0];
let running = false;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function startStop() {
  if (!running) {
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
    running = true;
    event.target.innerText = "Stop";
  } else {
    clearInterval(timer);
    running = false;
    event.target.innerText = "Start";
  }
}

function reset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  updateDisplay();
  running = false;
  document.querySelector(".buttons button").innerText = "Start";
}