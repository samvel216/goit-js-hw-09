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






const lalka = (event) => {
  event.preventDefault();
  const delayEl = Number(inputDelayEl.value);
  let stepEl = Number(inputStepEl.value);
  const amount = Number(inputAmountEl.value);
  let mmm = 0;
  intervalId = setInterval(() => {
    mmm ++;
    kokoko = stepEl;
    if(mmm == amount){
      clearInterval(intervalId);
    }
    createPromise( mmm ,stepEl)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  }, stepEl) 
}
  
