const toggle = document.querySelector(".toggle-menu");
const menu = document.querySelector(".header nav ul");
toggle.addEventListener("click",() => {
    menu.classList.toggle("show");
});
document.addEventListener("click",(e) => {
    if(!menu.contains(e.target) && ! toggle.contains(e.target)) {
        menu.classList.remove("show");
    }
});