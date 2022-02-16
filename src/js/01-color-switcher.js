const btnStartEl = document.querySelector('button');
const btnStopEl = btnStartEl.nextElementSibling;
const bodyEl = document.querySelector("body");
let timerId = null;
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyColorStarInterval = (event) => {
    event.preventDefault();
    timerId = setInterval(() => {
        bodyEl.style.backgroundColor = `${getRandomHexColor()}` 
    }, 1000);
    btnStartEl.removeEventListener('click', bodyColorStarInterval);
}
const bodyColorStop = (event) => {
    event.preventDefault();
    clearInterval(timerId);
    btnStartEl.addEventListener('click', bodyColorStarInterval);
}
btnStopEl.addEventListener('click', bodyColorStop);
btnStartEl.addEventListener('click', bodyColorStarInterval);
