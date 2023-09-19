const hamburger =  document.querySelector(".hamburger_menu")
const navMobile =  document.querySelector(".nav_mobile");
const menu= document.querySelector(".menu");
menu.addEventListener("click",()=>{
    navMobile.classList.toggle("active");
})