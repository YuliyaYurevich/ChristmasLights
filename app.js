const play = document.querySelector('.play');
const stop = document.querySelector('.stop');
const lights = document.querySelectorAll('.circle');
const speed = document.getElementById('quantity');
const submit = document.getElementById('submit');

const off = function () {
  lights.forEach((circle) => {
    circle.style.background = '#563260';
    circle.style.animation = 'none';
  });
};

const on = function () {
  lights.forEach((circle) => {
    circle.removeAttribute('style');
    circle.style.animationPlayState = 'running';
  });
};

const convert = function () {
  let speedLight = speed.value;
  console.log(speedLight);
  lights.forEach((circle) => {
    circle.removeAttribute('style');
    circle.style.animationPlayState = 'running';
    circle.style.animationDuration = speedLight + 's';
  });
};

play.addEventListener('click', on);
stop.addEventListener('click', off);
submit.addEventListener('click', convert);
