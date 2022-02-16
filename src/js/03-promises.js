const inputDelayEl = document.querySelector("input[name='delay']");
const inputStepEl = document.querySelector("input[name='step']");
const inputAmountEl = document.querySelector("input[name='amount']");
const btnEl = document.querySelector('button');
const formEl = document.querySelector('.form');
let intervalId = null;
function createPromise(position, delay) { 
  
    return new Promise((resolve, reject) => {    
      setTimeout(() => {
        const shouldResolve = Math.random() > 0.3;      
        if (shouldResolve) {
          resolve({position, delay})
        } 
          reject({position, delay})
      }, delay)
                 
})     

}
const lalka = (event) => {
  event.preventDefault();
  const delayEl = Number(inputDelayEl.value);
  let stepEl = Number(inputStepEl.value);
  const amount = Number(inputAmountEl.value);
for (let index = 1; index <= amount; index += 1) {

    createPromise(  index, stepEl )
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    });

}

}

formEl.addEventListener('submit', lalka);


