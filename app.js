const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", function() {
    this.classList.toggle("bi-moon");
    if(this.classList.toggle("bi-brightness-low-fill")){
        body.style.backgroundColor = "white";
        body.style.color = "black";
        body.style.transition = "1s";
    }else{
        body.style.background = "black";
        body.style.color = "white";
        body.style.transition = "1s";
    }
})