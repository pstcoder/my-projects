var ham = document.querySelector("#hamburger");
var menu = document.querySelector(".menu");
var slide1 = document.querySelector(".slide1");
var slide2 = document.querySelectorAll(".slide2");
var slide3 = document.querySelector(".slide3");
console.log(window.innerWidth);
ham.addEventListener(
    "click",
    function(){
        ham.classList.toggle("open-burger");
        if(menu.style.transform == ""){
            menu.style.transform = "translateX(0px)"
        }else{
            menu.style.transform = ""
            
        }
    }
    )
if (window.innerWidth > 992){
    window.addEventListener(
        "scroll",
        function(){
            if(this.scrollY >= 90){
                slide1.style.transform = "translateX(0)"
            }if(this.scrollY >= 330){
                
                slide2[0].style.transform = "translateX(0)"
                slide2[1].style.transform = "translateX(0)"
            }if(this.scrollY >= 720){
                
                slide3.style.transform = "translateX(0)"
                
            }
        }
    )
}