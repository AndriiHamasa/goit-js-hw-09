function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
  
const btnStartEl = document.querySelector('[data-start]');
const btnStopEl = document.querySelector('[data-stop]');
let timeId = null;

console.log(btnStartEl);

btnStartEl.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomHexColor();
    timeId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000)
    btnStartEl.setAttribute("disabled", "disabled");
    btnStopEl.removeAttribute("disabled", "disabled");
})
btnStopEl.addEventListener('click', () => {
    clearInterval(timeId);
    btnStopEl.setAttribute("disabled", "disabled");
    btnStartEl.removeAttribute("disabled", "disabled");
})
