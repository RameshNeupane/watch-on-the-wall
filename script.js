const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");

const initialDegree = 90;

const updateTime = () => {
  const date = new Date();

  let hour = date.getHours() % 12;
  if (hour === 0) {
    hour = 12;
  }
  const minute = date.getMinutes();
  const second = date.getSeconds();

  let secDegree = (initialDegree + second * 6) % 360;
  let minDegree = (initialDegree + minute * 6 + second / 10) % 360;
  let hrDegree = (initialDegree + hour * 30 + minute / 2) % 360;

  secondHand.style.transform = `rotate(${secDegree}deg)`;
  minuteHand.style.transform = `rotate(${minDegree}deg)`;
  hourHand.style.transform = `rotate(${hrDegree}deg)`;
};

updateTime();
setInterval(updateTime, 1000);
