const catMenyu = document.getElementById("categoryMenyu")
const catH1 = document.getElementById("catH1")
const catTuri = document.getElementById("catTur")
const catp = document.getElementById("p")
const catqol = document.getElementById("catqol")
const catqoll = document.getElementById("catqoll")
function openMenyu(){
      return catMenyu.style.display = "block"
}
function closeMenyu(){
    return catMenyu.style.display = "none"
}
function catNoutbook (){
    catH1.innerText = "Noutbooklar"
catTuri.innerText = "Noutbook Brendlari"
catqol.innerText = "Noutbook kulerlari Soni"
  catp.innerHTML = `
   <li>HP</li>
   <li>Lenovo</li>
   <li>Asus</li>
   <li>Acer</li>
   <li>Macbook</li>
   <li>Acer</li>
   <li>Asus</li>
  `;
  catqoll.innerHTML = `
    <li>1 ta kuler</li>
    <li>2 ta kuler</li>
    <li>5 ta kuler</li>
  `
  catp.style.display = "block"
    catqoll.style.display = "block"
  catqol.style.display = "block"
}
function catGame(){
    catH1.innerText = "O'yin Avtomatlari"
    catTuri.innerText = "O'yin Avtomatlar Brendlari"
    catp.style.display = "none"
    catqol.style.display = "none"
    catqoll.style.display = "none"
}
function catKit(){
    catH1.innerText = "Oshxona uchun Texnikalar"
    catTuri.innerText = "Oshxona Texnika Turlai"
     catp.style.display = "none"
    catqoll.style.display = "none"
    catqol.style.display = "none"
}
function catTel(){
    catH1.innerText = "Televizorlar"
    catTuri.innerText = "Televizor Brendlari"
     catp.style.display = "none"
    catqoll.style.display = "none"
    catqol.style.display = "none"
}
function catPhone(){
    catH1.innerText = "Telefonlar"
    catTuri.innerText = "Telefon Brendlari"
     catp.style.display = "none"
    catqol.style.display = "none"
    catqoll.style.display = "none"

}
function catBit(){
    catH1.innerText = "Bitavoy texnikalar"
    catTuri.innerText = "Bitavoy Texnika Turlari"
     catp.style.display = "none"
    catqol.style.display = "none"
    catqoll.style.display = "none"

}