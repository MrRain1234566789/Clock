const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

const deg = 6;
setInterval(()=> {
    let day = new Date();
    let ms = day.getMilliseconds() * deg;
    let ss = day.getSeconds() * deg + ms / 1000;
    let mm = day.getMinutes() * deg;
    let hh = day.getHours() * 30;
    
    hr.style.transform = `rotate(${hh}deg)`;
    min.style.transform = `rotate(${mm}deg)`;
    sec.style.transform = `rotate(${ss}deg)`;
});
