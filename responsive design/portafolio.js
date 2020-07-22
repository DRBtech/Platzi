var m = document.querySelector("#menu-mobile");
const MENU = document.querySelector(".menu");
const PANTALLA = window.matchMedia("screen and (max-width:767px)");
const L1 = document.querySelector("#link1");
const L2 = document.querySelector("#link2");
const L3 = document.querySelector("#link3");
if (PANTALLA.matches){
    m.addEventListener("click", mostrarmenu);
    L1.addEventListener("click", mostrarmenu);
    L2.addEventListener("click", mostrarmenu);
    L3.addEventListener("click", mostrarmenu);
}

PANTALLA.addListener(resize)
function resize(){
    if (event.matches){
        m.addEventListener("click", mostrarmenu);
        L1.addEventListener("click", mostrarmenu);
        L2.addEventListener("click", mostrarmenu);
        L3.addEventListener("click", mostrarmenu);
        console.log(true);
    } else {
        m.removeEventListener("click", mostrarmenu);
        L1.addEventListener("click", mostrarmenu);
        L2.addEventListener("click", mostrarmenu);
        L3.addEventListener("click", mostrarmenu);
        console.log(false);
    }
}
function mostrarmenu(){
    if (MENU.classList.contains("is-active")){
        MENU.classList.remove("is-active");
    } else {
        MENU.classList.add("is-active");
    }
}