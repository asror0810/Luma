const catMenyu = document.getElementById("categoryMenyu")
const catH1 = document.getElementById("catH1")
const catTuri = document.getElementById("catTur")
const catp = document.getElementById("p")
const catqol = document.getElementById("catqol")
const catqoll = document.getElementById("catqoll")
// const catPhone = document.getElementById("catPhone")
const catPrice = document.getElementById("catPrice")
function openMenyu(){
      return catMenyu.style.display = "block"
}
function closeMenyu(){
    return catMenyu.style.display = "none"
}
function catNoutbook (){
    catH1.innerText = "Noutbooklar"
catTuri.innerText = "Noutbook Brendlari"
catqol.innerText = "Noutbook Qo'llanmasi"
// catPrice.innerText = "Noutbook Narxlari"
// ======
  catp.innerHTML = `
   <li><a href="main.html">HP</a></li>
   <li><a href="main.html">Lenovo</a></li>
   <li><a href="main.html">Asus</a></li>
   <li><a href="main.html">Acer</a></li>
   <li><a href="main.html">Macbook</a></li>
   <li><a href="main.html">Acer</a></li>
   <li><a href="main.html">Asus</a></li>
  `;
  catqoll.innerHTML = `
    <li>1 ta kuler</li>
    <li>2 ta kuler</li>
    <li>5 ta kuler</li>
  `
}
function catGame(){
    catH1.innerText = "Avtomat Avtomatlari"
    catTuri.innerText = "Avtomat  Brendlari"
    catqol.innerText = ""
    catp.innerHTML = `
    <li><a href="#">Play Station 5</a></li>
    <li><a href="#">Play Station 4</a></li>
    <li><a href="#">Xbox Series X</a></li>
    <li><a href="#">Xbox One</a></li>
=======
    <li>Play Station 5</li>
    <li>Play Station 4</li>
    <li>Xbox Series X</li>
    <li>Xbox One</li>
    `
    catqoll.innerText = ""
    catPrice.innerText = ""
}
function catKit(){
    catH1.innerText = "Oshxona Texnikalari"
    catTuri.innerText = "Oshxona Texnika Turlai"
     catp.innerHTML = `
    <li><a href="#">Blender</a></li>
    <li><a href="#">Choynak</a></li>
    <li><a href="#">Qahva Mashinasi</a></li>
    <li><a href="#">Qahva Mashinasi</a></li>
=======
    <li>Blender</li>
    <li>Choynak</li>
    <li>Qahva Mashinasi</li>
    <li>Qahva Mashinasi</li>
     `
    catqol.innerText = ""
    catqoll.innerText = ""
    catPrice.innerText = ""

}
function catTel(){
    catH1.innerText = "Televizorlar"
    catTuri.innerText = "Televizor Brendlari"
     catp.innerHTML = `
    <li><a href="#">LG</a></li>
    <li><a href="#">Samsung</a></li>
    <li><a href="#">Xiomi</a></li>
    <li><a href="#">LG</a></li>
=======
    <li>LG</li>
    <li>Samsung</li>
    <li>Xiomi</li>
    <li>LG</li>
     `
    catqoll.innerText = ""
    catqol.innerText = ""
    catPrice.innerText = ""

}
function catPhone(){
    catH1.innerText = "Telefonlar"
    catTuri.innerText = "Telefon Brendlari"
    catp.innerHTML = `
    <li><a href="#">Apple</a></li>
    <li><a href="#">Samsung</a></li>
    <li><a href="#">Xiomi</a></li>
=======
    <li>Apple</li>
    <li>Samsung</li>
    <li>Xiomi</li>
    `
    //  catp.innerText = ""
    catqoll.innerText = ""
  catqol.innerText = ""
    catPrice.innerText = ""

}
function catBit(){
    catH1.innerText = "Bitavoy texnikalar"
    catTuri.innerText = "Bitavoy Texnika Turlari"
         catp.innerHTML = `
         <li><a href="#">Bitavoy</a></li>
            <li><a href="#">Bitavoy</a></li>
            <li><a href="#">Bitavoy</a></li>
=======
         <li>Bitavoy</li>
            <li>Bitavoy</li>
            <li>Bitavoy</li>
          `
    catqoll.innerText = ""
  catqol.innerText = ""
    catPrice.innerText = ""

}