function t(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}btnStartEl=document.querySelector("[data-start]"),btnStopEl=document.querySelector("[data-stop]"),console.log(btnStartEl),btnStartEl.addEventListener("click",(()=>{document.body.style.backgroundColor=t(),timeId=setInterval((()=>{document.body.style.backgroundColor=t()}),1e3),btnStartEl.setAttribute("disabled","disabled"),btnStopEl.removeAttribute("disabled","disabled")})),btnStopEl.addEventListener("click",(()=>{clearInterval(timeId),btnStopEl.setAttribute("disabled","disabled"),btnStartEl.removeAttribute("disabled","disabled")}));
//# sourceMappingURL=01-color-switcher.acb29b4a.js.map