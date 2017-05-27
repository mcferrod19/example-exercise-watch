
var upDate = window.setInterval(currentTime, 1000);
function currentTime(){

  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    document.querySelector('.clock').innerHTML = hours + ":" + minutes + ":" + seconds;
  }

  currentTime();
