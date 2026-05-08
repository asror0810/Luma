const catMod = document.getElementById("catMod");
const catKr = document.getElementById("catKr");
const catRm = document.querySelector(".catRm");
const catSdd = document.querySelector(".catSdd");
const catModInp = document.getElementById("catModInp");
const catKrInp = document.getElementById("catKrInp");
const catRmInp = document.getElementById("catRmInp");
const catSddInp = document.getElementById("catSddInp");
catModInp.addEventListener("change", () => {
    catMod.innerText = catModInp.value;
});
catKrInp.addEventListener("change", () => {
    catKr.innerText = catKrInp.value;
});
catRmInp.addEventListener("change", () => {
    catRm.innerText = catRmInp.value;
});
catSddInp.addEventListener("change", () => {
    catSdd.innerText = catSddInp.value;
});