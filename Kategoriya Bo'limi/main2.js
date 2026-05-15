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