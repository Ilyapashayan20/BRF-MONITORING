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