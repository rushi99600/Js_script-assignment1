function getTime() {
  var clockTime = new Date().toLocaleTimeString([], {
    hours: '2-digit',
    minutes: '2-digit',
    seconds: '2-digit',
  });
  document.getElementById('timeContainer').innerText = clockTime;
}
(function showDate() {
  var todayDate = new Date();
  document.getElementById('dateContainer').innerText = todayDate.toDateString();
})();
var intervalRef;

function startClock() {
  intervalRef = setInterval(getTime, 1000);
}

function stopClock() {
  clearInterval(intervalRef);
}