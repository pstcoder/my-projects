var ham = document.querySelectorAll(".ham-menu");
var menu = document.querySelector("#menu");
console.log(menu)
console.log("hi")
ham[0].addEventListener(
    "click",
    function(){
        console.log("hiiiii")
        menu.style.left = "0px";
        ham[0].style.display = "none";
        ham[1].style.display = "block";
    }
)
ham[1].addEventListener(
    "click",
    function(){
        menu.style.left = "";
        ham[0].style.display = "";
        ham[1].style.display = "";
    }
)

var extra3 = document.querySelector(".extra3");
var navig = document.querySelector("nav");
var navbg = document.querySelector(".sticky-nav-bg");


document.addEventListener(
    "scroll",
    function(){
        if(window.scrollY > 60){
            navig.classList.add("extra3");
            navbg.style.opacity = 1;
        }else{
            navig.classList.remove("extra3");
            navbg.style.opacity = 0;
        }
    }
)

var nlItem = document.querySelectorAll(".nl-item");
var mla = document.querySelectorAll(".ml-area");
var cont = document.querySelectorAll(".r-cont");

cont[0].style.animation = "doc 0.5s forwards";
console.log(mla);

function active(index){
    var cT = document.querySelectorAll(".nl-item-toggle");
    
    for(r of cont){
        r.style.display = "";
        cont[index].style.animation = "doc 0.5s forwards";
        cont[index].style.display = "block";
    }
    if(cT.length != 0){
        cT[0].classList.remove("nl-item-toggle");
    }
    
    nlItem[index].classList.add("nl-item-toggle");

    if(index == 1 || index == 2 || index == 3){
        nlItem[0].classList.remove("selected");
    }

    
    
}


