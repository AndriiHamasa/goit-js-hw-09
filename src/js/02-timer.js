import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";
// import "notiflix/dist/notiflix.min.css";
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
  
const addLeadingZero = value => value.toString().padStart(2, '0');
const inputEl = document.querySelector('#datetime-picker');
const btnEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      if (selectedDates[0] - new Date() < 0) {
          Notiflix.Report.warning('😡 Warning', 'Please choose a date in the future', 'Ok', {
            width: '360px',
            titleFontSize: '24px',
            messageFontSize: '18px',
            buttonFontSize: '18px',
            svgSize: '120px',
            borderRadius: '20px',
          });
          return;
      }
      btnEl.removeAttribute("disabled", "disabled");
      
      btnEl.addEventListener('click', () => {
        btnEl.setAttribute("disabled", "disabled");

        const intervalId = setInterval(() => {
          daysEl.textContent = addLeadingZero(convertMs(selectedDates[0] - new Date()).days);
          hoursEl.textContent = addLeadingZero(convertMs(selectedDates[0] - new Date()).hours);
          minutesEl.textContent = addLeadingZero(convertMs(selectedDates[0] - new Date()).minutes);
          secondsEl.textContent = addLeadingZero(convertMs(selectedDates[0] - new Date()).seconds);
          if (convertMs(selectedDates[0] - new Date()).days === 0 &&
            convertMs(selectedDates[0] - new Date()).hours === 0 && 
            convertMs(selectedDates[0] - new Date()).minutes === 0 && 
            convertMs(selectedDates[0] - new Date()).seconds === 0) {
            clearInterval(intervalId);
            }
        }, 1000)
      })
    },
  };
const fp = flatpickr(inputEl, options);
  
btnEl.setAttribute("disabled", "disabled");