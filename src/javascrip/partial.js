const backarrow = document.querySelector(".back-arrow")
backarrow.addEventListener("click",()=>{
    location.href = "deliverise.html";
})


const mapmodal = document.querySelector(".map-link")
const openmapblock = document.querySelector(".open-map")
const partial = document.querySelector(".partial-return ")
mapmodal.addEventListener("click",()=>{
    openmapblock.style.display = "block"

    partial.classList.add("active-backgraund")
    setTimeout(() => {
        partial.style.display="none"
        
        
    }, 600);

})

const closemap = document.querySelector(".close-map")
closemap.addEventListener("click",()=>{
    openmapblock.style.display = "none"
    partial.classList.remove("active-backgraund")
    partial.style.display="block"

})

const partialStartBtn = document.querySelector(".partial-start-btn")
const paratelbtnclickdisplaynone = document.querySelector(".paratel-btn-click-display-none")




const partialmotivationheader = document.querySelector(".partial-motivation-header")


partialStartBtn.addEventListener("click",()=>{
    paratelbtnclickdisplaynone.style.display = "none"
    partialStartBtn.style.display = "none"
    
})

const vectors = [

 document.querySelector(".vector-6"),
 document.querySelector(".arrow-2"),
 document.querySelector(".arrow-3"),
]

for (let index = 0; index < vectors.length; index++) {
    const d = vectors[index];
    d.addEventListener("click",()=>{
        partialmotivationheader.style.display ="block"
        partial.style.display = "none"
    
    })
    
}


const vectorclose =  document.querySelector(".vector-7")
vectorclose.addEventListener("click",()=>{
    partialmotivationheader.style.display ="none"
    partial.style.display = "block"
    console.log("close");

})
