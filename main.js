 const catBody = document.querySelector("#catBody")
 const openBtn = document.querySelector("#openBtn")
function openMenyu(){
    return catBody.style.display = "none"
}
function closeMenyu(){
   return openBtn.innerText = "X"    
}