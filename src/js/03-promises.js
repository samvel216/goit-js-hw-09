import Notiflix from 'notiflix';
console.log(Notiflix);
const inputDelayEl = document.querySelector("input[name='delay']");
const inputStepEl = document.querySelector("input[name='step']");
const inputAmountEl = document.querySelector("input[name='amount']");
const btnEl = document.querySelector('button');
const formEl = document.querySelector('.form');
let intervalId = null;
function createPromise(position, delay) {
    return new Promise((resolve, reject) => {     
        const shouldResolve = Math.random() > 0.3;      
        if (shouldResolve) {
          resolve({position, delay})
        } 
          reject({position, delay})      
})     
}
const sendPromise = (event) => {
  event.preventDefault();
  const delayEl = Number(inputDelayEl.value);
  const stepEl = Number(inputStepEl.value);
  const amount = Number(inputAmountEl.value);
  let positionIndex = 1;
  setTimeout(() => {
    createPromise( 1 ,delayEl)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delayEl}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delayEl}ms`);
      });
  },delayEl)
  setTimeout(() => {
    intervalId = setInterval(() => {
      positionIndex ++;
      if(positionIndex == amount){
        clearInterval(intervalId);
      }
      createPromise( positionIndex ,stepEl)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    }, stepEl) 
  }, delayEl) 
}
formEl.addEventListener('submit', sendPromise);


