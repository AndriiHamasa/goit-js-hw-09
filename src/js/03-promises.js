import Notiflix from 'notiflix';
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({position, delay});
      } else {
        // Reject
        reject({position, delay});
      }
    }, delay)
  })
}
const delayEl = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');
const bntEl = document.querySelector('button');
bntEl.addEventListener('click', (event) => {
  event.preventDefault();
  let amountOfMlSeconds = 0;
  for (let i = 0; i < Number(amountEl.value); i += 1){
    amountOfMlSeconds = Number(delayEl.value) + (i * Number(stepEl.value));
    createPromise(i + 1, amountOfMlSeconds)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
  }
  
})
