const menubtn = document.querySelector(".menu-btn")
const menu = document.querySelector(".menu")
const addblock = document.querySelector(".add-block")
const panel = document.querySelector(".panel")
const an = document.querySelector(".panel-block-1")

menubtn.addEventListener("click",function(){
    
})

menubtn.addEventListener("click", mobileMenu);

function mobileMenu() {
    menu.classList.toggle("active");
    addblock.classList.toggle("activeone");
    panel.classList.toggle("activetwo");
    an.classList.toggle("activetwo");
    monitoringblock.classList.toggle("padding")
}

var modal = document.querySelector(".modal");
var btn = document.querySelector(".create");
var modalbg = document.querySelector(".modal-bg");

var closemodal = document.querySelector(".close-modal");

btn.addEventListener("click", function() {
  modal.style.top = "16px";
  
  modalbg.style.display= "block"
})

closemodal.onclick = function() {
  modal.style.top = "-1200px";
  modalbg.style.display= "none"
}

modalbg.onclick =function (){
  modalbg.style.display= "none"
  modal.style.top = "-1200px";
}

const FilterBtn = document.querySelector(".filter-btn")
const dsd = document.querySelector(".dsd")
const body = document.body
const success = document.querySelector(".success")
const monitoringblock = document.querySelector(".monitoring-block")


FilterBtn.addEventListener("click", () =>{
  dsd.style.display =  "none";
  body.style.background = "#fff";
  modal.style.top = "-1200px";
    modalbg.style.display= "none"
    success.classList.add("s-none")
   
  setTimeout(()=>{
    monitoringblock.style.display= "block"
    mobileMenu()
  },600)
  setTimeout(()=>{
    success.classList.add("auto-clear")
  },2000)
  setTimeout(()=>{
    success.style.display = "none"
  },3100)
})

const h = document.querySelector(".success-close")

h.addEventListener("click", ()=>{
  success.classList.remove("s-none")
})  


const openViagem = document.querySelector(".s-arrow")
const openViagemTwo = document.querySelector(".s-arrow-2")

const openViagemThree = document.querySelector(".s-arrow-3")
const openViagemFor = document.querySelector(".s-arrow-4")
const viagemFooter =document.querySelector('.display-none')
const viagemFooterTwo =document.querySelector('.display-none-2')
const viagemFooterThree =document.querySelector('.display-none-3')
openViagem.addEventListener("click", ()=>{
  openViagem.classList.toggle("img-vc-active")
  viagemFooter.classList.toggle("ds-toggle")

})
openViagemTwo.addEventListener("click", ()=>{
  openViagemTwo.classList.toggle("img-vc-active")
  viagemFooterTwo.classList.toggle("ds-toggle")

})

openViagemThree.addEventListener("click", ()=>{
  openViagemThree.classList.toggle("img-vc-active")
  viagemFooterThree.classList.toggle("ds-toggle")

})




const outstading = document.getElementById("outstading")
const finished = document.getElementById("finished")
const CardsBlockMobile =document.querySelector(".cards-block-mobile")
const finishedblock = document.querySelector(".finished-block")


outstading.addEventListener("click", function (){
  CardsBlockMobile.style.display = "block"
  finished.classList.remove("tab-link-active")
  outstading.classList.add("tab-link-active")
  finishedblock.style.display = "none"
  
})

finished.addEventListener("click", ()=>{
  CardsBlockMobile.style.display = "none"
  outstading.classList.remove("tab-link-active")
  finished.classList.add("tab-link-active")
  finishedblock.style.display = "flex"


})


const SectionMobileBlock = document.getElementById("section-mobile-block")
const CardMobile = document.querySelector(".card-mobile")
const SectionMobileBlockTwo = document.getElementById("section-mobile-block-2")
const pause = document.querySelector(".pause")
const start = document.querySelector(".start")


  
CardMobile.addEventListener("click", ()=>{
  SectionMobileBlock.style.display= "block"


  SectionMobileBlockTwo.style.display= "block"
  pause.classList.add("pause-active")
    start.classList.add("start-active")
    
  
})




const radiobtn = document.querySelector(".radio-btn")
// const radiobtntwo = document.querySelector(".radio-btn-2")
// const radiobtnthree = document.querySelector(".radio-btn-3")
// const radiobtnfor = document.querySelector(".radio-btn-4")
// const radiobtnfive = document.querySelector(".radio-btn-5")
// const radiobtnsix = document.querySelector(".radio-btn-6")
// const radiobtnseven = document.querySelector(".radio-btn-7")
// const radiobtneate = document.querySelector(".radio-btn-8")
// const radiobtnnine = document.querySelector(".radio-btn-9")
const buttonpause= document.querySelector(".button-pause")
const radiobtnactivee = document.querySelector(".radio-btn-active-blue")
radiobtn.addEventListener("click", function radioactive(){
  console.log("active");
  radiobtnactivee.classList.toggle("radio-btn-active")
  buttonpause.classList.toggle("button-pause-active")
})





// const arrayRadioBtn  = [
//   document.querySelector(".radio-btn"),
//   document.querySelector(".radio-btn-2"),
//   document.querySelector(".radio-btn-3"),
  
// ]
// const sddd = [
//   document.querySelector(".ds")
// ]

// for (let index = 0; index < arrayRadioBtn.length && sddd.length; index++) {
//   const s = arrayRadioBtn[index];
//   s.addEventListener("click",()=>{
//     console.log("active");
//     radiobtnactivee.classList.toggle("radio-btn-active")
//     buttonpause.classList.toggle("button-pause-active")
    
  
//   })
  
// }



const array = [
  document.querySelector(".card-mobile"),
  document.querySelector(".card-mobile-2"),
  document.querySelector(".card-mobile-3"),
  document.querySelector(".card-mobile-4"),
  document.querySelector(".card-mobile-5"),


]

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  element.addEventListener("click", ()=>{
    SectionMobileBlock.style.display= "flex"
    SectionMobileBlockTwo.style.display= "flex"
    
   
  })
  
  
}  

const sectionIputMobil = document.querySelector(".input-mobile-serach")
const sectionNone = document.querySelector(".section-none")

sectionIputMobil.addEventListener("click",function(){
  sectionNone.classList.add("status-section-active")
});

const CardMobileActive = [
  document.querySelector(".card-mobile"),
  document.querySelector(".card-mobile-2"),
  document.querySelector(".card-mobile-3"),
  document.querySelector(".card-mobile-4"),
  document.querySelector(".card-mobile-5"),
]

const lineball = [
  document.querySelector(".line-greey "),
  document.querySelector(".line-greey-2 "),
  document.querySelector(".line-greey-3 "),
  document.querySelector(".line-greey-4 "),
  document.querySelector(".line-greey-5 "),
]

for (let index = 0; index < CardMobileActive.length && lineball.length; index++) {
  const click = CardMobileActive[index];
  const line = lineball[index]

  click.addEventListener("click", ()=>{
    click.classList.add("card-mobile-active")
    line.classList.add("line-active")
    sectionNone.classList.remove("status-section-active")
    start.classList.remove("start-active-2")
    
   
  })
  buttonpause.addEventListener("click",()=>{
    modalPauseMenu.style.display = "none"
    setTimeout(() => {
      wrapperMobile.style.display = "block"
      
    }, 600);
    viagempause.style.display = "flex"
    setTimeout(() => {
      viagempause.classList.toggle("viagem-pause-active")
      
    }, 400);

    click.classList.remove("card-mobile-active")
    line.classList.remove("line-active")
    pause.classList.remove("pause-active")
    start.classList.add("start-active-2")
  })
}

const closepause = document.querySelector(".close-pause")
const wrapperMobile = document.querySelector(".wrapper-mobile")
const modalPauseMenu = document.querySelector(".modal-pause-mobile")
const viagempause = document.querySelector(".viagem-pause")
closepause.addEventListener("click",()=>{
  modalPauseMenu.style.display = "none"
  setTimeout(() => {
    wrapperMobile.style.display = "block"
    
  }, 800);


})



pause.addEventListener("click", function(){
   modalPauseMenu.style.display = "block"
   wrapperMobile.style.display = "none"

   

})

const viagemclosesourrce = document.querySelector(".viagem-close")
viagemclosesourrce.addEventListener("click", function(){
  viagempause.classList.toggle("viagem-pause-close-active")
  setTimeout(() => {
    viagempause.style.display = "none"

    
  }, 800);
 

})

// click.classList.remove("card-mobile-active")
// line.classList.remove("line-active")

// pause.classList.remove("pause-active")
// start.classList.remove("start-active")