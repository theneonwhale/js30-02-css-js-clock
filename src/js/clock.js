const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');
const button = document.querySelector('.button');
const audio = document.querySelector(`#sound`);

button.addEventListener('click', soundOn);

function soundOn() {
  button.classList.toggle('on');
}

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  if (button.classList.contains('on')) {
    audio.currentTime = 0;
    audio.play();
  } else {
    audio.pause();
  }
}

setInterval(setDate, 1000);
setDate();
