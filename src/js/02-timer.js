import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';
const btnStartEl = document.querySelector("button");
const inputEl = document.querySelector("#datetime-picker");
const dataStartEl = document.querySelector('[data-start]');
const dataDaysEl = document.querySelector('[data-days]');
const dataHoursEl = document.querySelector('[data-hours]');
const dataMinutesEl = document.querySelector('[data-minutes]');
const dataSecondsEl = document.querySelector('[data-seconds]');
btnStartEl.disabled = true;
let timerId = null; 
const taimerWithoutMeaning = "00";
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
const date = new Date();
const calenders = flatpickr(inputEl, {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0].getTime() < date.getTime()) {
        window.alert("Please choose a date in the future");
      } else {
        btnStartEl.disabled = false;
      }  
    },
});
const withoutTaimer = (taimerWithoutMeaning) => {
 dataDaysEl.textContent = taimerWithoutMeaning;
 dataHoursEl.textContent = taimerWithoutMeaning;
 dataMinutesEl.textContent = taimerWithoutMeaning;
 dataSecondsEl.textContent = taimerWithoutMeaning;
}
const getTaimerMeaning = (days,hours,minutes,seconds) => {
  dataDaysEl.textContent = days;
  if (days < 10) {
   dataDaysEl.textContent = `0${+days}`
  }
  dataHoursEl.textContent = hours;
  if (hours < 10) {
    dataHoursEl.textContent = `0${+hours}`
  }
  dataMinutesEl.textContent = minutes;
  if (minutes < 10) {
    dataMinutesEl.textContent = `0${+minutes}`
  }
  dataSecondsEl.textContent = seconds;
  if (seconds < 10) {
    dataSecondsEl.textContent = `0${+seconds}`
  }
}
const getTaimer = () => { 
  timerId = setInterval(() => {
  let taimerTime = calenders.selectedDates[0] - Date.now();
  if (taimerTime > 0 ) {
    const convertMsObject = convertMs(taimerTime);
    convertMs(taimerTime)
    getTaimerMeaning(convertMsObject.days,convertMsObject.hours,convertMsObject.minutes,convertMsObject.seconds);
  } else {
    withoutTaimer(taimerWithoutMeaning);
  }
  }, 1000)
}
btnStartEl.addEventListener('click' , getTaimer);


