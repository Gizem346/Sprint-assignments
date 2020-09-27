const deg = 6;
const hour_1 = document.querySelector("#hour_1");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");
setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    hour_1.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;

})