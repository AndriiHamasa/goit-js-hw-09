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
