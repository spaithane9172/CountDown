let minutes = document.getElementById("minutes").innerHTML;

console.log(minutes);
let seconds = 0;

function countDown() {
  if (minutes != 0 || seconds != 0) {
    setTimeout(minusSeconds, 1000);
  }
}
countDown();
function minusSeconds() {
  seconds -= 1;
  if (seconds < 0) {
    minusMinutes();
    seconds = 59;
  }

  if (seconds < 10)
    document.getElementById("seconds").innerHTML = "0" + seconds;
  else document.getElementById("seconds").innerHTML = seconds;

  if (minutes < 10)
    document.getElementById("minutes").innerHTML = "0" + minutes;
  else document.getElementById("minutes").innerHTML = minutes;

  if (minutes == 0 && seconds == 0)
    document.getElementById("back").classList.remove("hidden");
  countDown();
}
function minusMinutes() {
  minutes -= 1;
}
