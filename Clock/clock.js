
var boxes = document.querySelectorAll(".box");
var sec = document.querySelector(".s-hands");
var min = document.querySelector(".m-hands");
var hour = document.querySelector(".h-hands");
var select = document.querySelector("#select");
var ghadi = document.querySelector(".clock");

var date = new Date();
var h = date.getHours();
var m = date.getMinutes();
var second = date.getSeconds();
min.style.transform = `rotate(${m * 6}deg)`;
var count = m * 6 + second * 0.1;
// console.log(count);

hour.style.transform = `rotate(${h * 30 + m / 2}deg)`;
var hourCount = h * 30 + m / 2 + second * 1 / 120;
// console.log(h);
// console.log(h*30+m/2);
function clock() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    if (s.toString().length == 1) {
        boxes[4].innerText = `0${s}`;
    } else {
        boxes[4].innerText = s;
    }
    if (m.toString().length == 1) {
        boxes[2].innerText = `0${m}`;
    } else {
        boxes[2].innerText = m;
    }
    if (h > 12) {
        h = h - 12;
    }
    if (h.toString().length == 1) {
        boxes[0].innerText = `0${h}`;
    } else {
        boxes[0].innerText = h;
    }

    if (date.getHours() > 12) {
        boxes[5].innerText = "pm";
    } else {
        boxes[5].innerText = "am";
    }
    // console.log(s.toString().length);

    count += 0.1;
    hourCount += 0.01;
    // console.log(count);
    sec.style.transform = `rotate(${s * 6}deg)`;
    min.style.transform = `rotate(${count}deg)`;
    hour.style.transform = `rotate(${hourCount}deg)`

}
setInterval(
    () => {
        clock()
    }
    , 1000
)

function bg() {
    if (select.value == 3) {
        ghadi.style.background = `url(Img/clock3.jpg) center no-repeat `
        ghadi.style.backgroundSize = "contain"
    }else{

        ghadi.style.background = `url(Img/clock${select.value}.png) center no-repeat `
        ghadi.style.backgroundSize = "contain"
    }
}