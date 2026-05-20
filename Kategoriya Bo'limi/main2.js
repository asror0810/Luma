const info = document.getElementById("info");
const characteristics = document.getElementById("characteristics");
const reviews = document.getElementById("reviews");
const hr = document.querySelector("#InfoPro hr");
    
info.addEventListener("click", function() {
    hr.style.left = "6%";
    p.style.display = "block"
    hk.style.display = "none"
    hk2.style.display = "none"
    form.style.display = "none"
});

characteristics.addEventListener("click", function() {
    hr.style.top = "13%";
    hr.style.left = "17%";
    hk.style.display = "block"
    hk2.style.display = "block"
    p.style.display = "none"
    form.style.display = "none"
});
const form = document.getElementById("formCom")
reviews.addEventListener("click", function() {
    hr.style.left = "27.30%";
    p.style.display = "none "
    form.style.display = "block"
    hk.style.display = "block"
    hk2.style.display = "block"
});
const p = document.getElementById("p")
const hk = document.getElementById("hk")
const hk2 = document.getElementById("hk2")

// const nameInp = document.querySelector(".nameInp")
// const nameInp = document.querySelector(".emailInp")
// const nameInp = document.querySelector(".passInp")
// const nameInp = document.querySelector(".nameInp")

// ===============================================


const img1 = document.getElementById("img1")
const img2 = document.getElementById("img2")
// ===================
const img3 = document.getElementById("img3")
const Img3 = document.getElementById("Img3")
// ========================
const img4 = document.getElementById("img4")
const Img4 = document.getElementById("Img4")
img2.addEventListener("click",() => {
    img1.style.display = "block"
    img3.style.display = "none"
    img4.style.display = "none"
   img2.style.border = "1px solid red"
   Img3.style.border = "1px solid black"
   img4.style.border = "1px solid black"
})
Img3.addEventListener("click",() => {
    img3.style.display = "block"
    img1.style.display = "none"
    img4.style.display = "none"
       img2.style.border = "1px solid black"
   Img3.style.border = "1px solid red"
   Img4.style.border = "1px solid black"
})
Img4.addEventListener("click",() =>{
      img4.style.display = "block"
      img1.style.display = "none"
      img3.style.display = "none"
       img2.style.border = "1px solid black"
   Img3.style.border = "1px solid black"
   Img4.style.border = "1px solid red"
}
)
// ================

const ProAddKor = document.getElementById("ProAddKor")

function openProAdd(){
    ProAddKor.style.display = "block"
}