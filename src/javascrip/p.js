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
  modal.style.top = "40px";
  
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

const FilterBtn = document.querySelector(".f-btn")
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

const DFM = document.querySelector(".success-close")

DFM.addEventListener("click", ()=>{
  success.classList.remove("s-none")
})  




// FilterBtn.addEventListener('click', function(){
//   monitoringblock.style.display = "block"
// })

const CardBlock = document.querySelector(".card")
const TableActive = document.getElementById("TableActive")
const TableBlock = document.querySelector(".table-block")
const ActiveCards = document.querySelector(".active-cards")

TableActive.addEventListener("click", ()=>{
  TableActive.classList.add("Table-Active")
  ActiveCards.style.color = "#5B5C60"
  TableBlock.classList.remove("tb-remove-animation")
  CardBlock.classList.add("remove-card-block")
  setTimeout(()=>{
    CardBlock.style.display = "none"
  },330)
  TableBlock.style.display= "flex"
  setTimeout(()=>{
    TableBlock.classList.add("table-block-active")
    TableBlock.classList.remove("smb")
    
  },200)

})


ActiveCards.addEventListener("click", ()=>{
  ActiveCards.style.color = "#005AFE"
  TableBlock.classList.add("tb-remove-animation")
  TableBlock.classList.remove("table-block-active")
  TableActive.classList.remove("Table-Active")

  TableBlock.classList.add("tb-remove-animation")
  setTimeout(()=>{
    TableBlock.classList.add("smb")

  },100)
  setTimeout(()=>{
    CardBlock.classList.remove("remove-card-block")

  },400)
  CardBlock.classList.add("card-block-active")
  


  TableBlock.classList.add("remove-table-block")
  setTimeout(()=>{
    TableBlock.style.display= "none"
   
    
    CardBlock.style.display = "grid"
    
  },200)
  
  setTimeout(()=>{
    CardBlock.classList.add("card-block-active-2")
    TableBlock.classList.add("table-block-active")
    
   
    
  },300)

})
