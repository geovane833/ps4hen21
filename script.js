function updateTime() {
  const hoursContainer = document.querySelector(".hours .time span");
  const minutesContainer = document.querySelector(".minutes .time span");
  const secondsContainer = document.querySelector(".seconds .time span");

  const dataNow = new Date();

  const hours = correctTime(dataNow.getHours());
  hoursContainer.textContent = hours;

  const minutes = correctTime(dataNow.getMinutes());
  minutesContainer.textContent = minutes;

  const seconds = correctTime(dataNow.getSeconds());
  secondsContainer.textContent = seconds;
};

function correctTime(number){
  if(number < 10){
    number = "0" + number;
  }

  return number
};

updateTime();
setInterval(updateTime, 1000);