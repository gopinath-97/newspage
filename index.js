let btn = document.querySelector(".btn-mobile");
let header = document.querySelector(".header")

btn.addEventListener('click', function(){
    header.classList.toggle("nav-open")
})