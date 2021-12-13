const menubtn = document.querySelector(".menu-btn")
const menu = document.querySelector(".menu")
const ViagemCardBlockBody = document.querySelector(".viagem-card-block-body")
const panel = document.querySelector(".panel")
const an = document.querySelector(".panel-block-1")
const viagemlink = document.querySelector(".viagem-link")

menubtn.addEventListener("click",function(){
    
})

menubtn.addEventListener("click", mobileMenu);

function mobileMenu() {
    menu.classList.toggle("menu-open");
    // ViagemCardBlockBody.classList.toggle("activeone");
    panel.classList.toggle("activetwo");
    an.classList.toggle("activetwo");
    viagemlink.classList.toggle("padding")

}


const CardViagemOpen = document.querySelector(".viagem-card-open")
const ViagemDisplay = document.querySelector(".display")
const ViagemDisplayTwo = document.querySelector(".display-2")
const CardViagemOpenTwo = document.querySelector(".viagem-card-open-2")
const ViagemDisplayThree = document.querySelector(".display-3")
const CardViagemOpenThree = document.querySelector(".viagem-card-open-3")
const ViagemDisplayFor = document.querySelector(".display-4")
const CardViagemOpenFor = document.querySelector(".viagem-card-open-4")



CardViagemOpen.addEventListener("click", ()=>{
    CardViagemOpen.classList.toggle("arrow-animation")
    ViagemDisplay.classList.toggle("display-active")
    
})

CardViagemOpenTwo.addEventListener("click", ()=>{
    CardViagemOpenTwo.classList.toggle("arrow-animation-2")
    ViagemDisplayTwo.classList.toggle("display-active-2")
    
})

CardViagemOpenThree.addEventListener("click", ()=>{
    CardViagemOpenThree.classList.toggle("arrow-animation-2")
    ViagemDisplayThree.classList.toggle("display-active-2")
    
})

CardViagemOpenFor.addEventListener("click", ()=>{
    CardViagemOpenFor.classList.toggle("arrow-animation-2")
    ViagemDisplayFor.classList.toggle("display-active-2")
    
})




